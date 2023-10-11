---
title: Download data from a STAC API using GDAL and the command line
description: How to download data from a STAC API using GDAL and the command line
---

# Download data from a STAC API using GDAL and the command line

This tutorial walks through how to use the [STACIT GDAL
Driver](https://gdal.org/drivers/raster/stacit.html) to retrieve data
from a STAC catalog or collection using GDAL’s command line interface
(CLI). We’ll be using data from Planetary Computer’s [USGS Land Change
Monitoring, Assessment, and Projection
(LCMAP)](https://planetarycomputer.microsoft.com/dataset/usgs-lcmap-conus-v13)
collection as an example.

We’re going to assume that you’ve got [GDAL
installed](https://gdal.org/) (version 3.4 or newer), and are working in
a Bash-like shell (one that lets you define variables with `VAR=` and
call them with `$VAR`) with gdalwarp and gdalinfo available. We’ll also
use [curl](https://curl.se/), [head](https://linux.die.net/man/1/head)
and [jq](https://jqlang.github.io/jq/) once to look at the results of an
API query – but you can follow the rest of the tutorial without those
installed.

To download the 2021 LCMAP primary land cover classification (`lcpri`)
for the New York State bounding box, we can use gdalwarp with the STACIT
driver like so:

``` bash
gdalwarp "STACIT:\"https://planetarycomputer.microsoft.com/api/stac/v1/search?&collections=usgs-lcmap-conus-v13&datetime=2021-01-01/2021-12-31&bbox=-79.762,40.496,-71.856,45.013\":asset=lcpri" output.tif
```

```text
Processing STACIT:"https://planetarycomputer.microsoft.com/api/stac/v1/search?&collections=usgs-lcmap-conus-v13&datetime=2021-01-01/2021-12-31&bbox=-79.762,40.496,-71.856,45.013":asset=lcpri [1/1] : 0Using internal nodata values (e.g. 0) for image STACIT:"https://planetarycomputer.microsoft.com/api/stac/v1/search?&collections=usgs-lcmap-conus-v13&datetime=2021-01-01/2021-12-31&bbox=-79.762,40.496,-71.856,45.013":asset=lcpri.
...10...20...30...40...50...60...70...80...90...100 - done.
```

That one-liner finds all the `lcpri` rasters for our spatiotemporal area
of interest on Planetary Computer and downloads them, merging them into
a single output file as it does so. Depending how familiar you are with
HTTP queries, the one-liner probably either makes perfect sense or looks
like complete gibberish. The rest of this tutorial will walk through the
components of that one-liner, to try and help it make perfect sense to
everyone.

Most of that one-liner is taken up by a single URL, which we use to find
out where the relevant rasters we’re after are on the Planetary
Computer. The base of that URL points to the [Item-Search API
endpoint](https://github.com/radiantearth/stac-api-spec/tree/main/item-search),
which is a standardized API endpoint that STAC APIs like Planetary
Computer’s provide to let users search through the various collections
and items available in the API. Let’s put the URL for that endpoint in a
variable called `QUERY_URL`:

``` bash
QUERY_URL="https://planetarycomputer.microsoft.com/api/stac/v1/search"
echo $QUERY_URL
```

```
https://planetarycomputer.microsoft.com/api/stac/v1/search
```
Another long chunk of the URL in our one-liner is made up by query
parameters, which we use to filter down the items provided by the API to
just the data products and spatiotemporal range that we want. For
instance, we’ll want to set the `collections` parameter to filter our
search to only include LCMAP data:

``` bash
COLLECTION="usgs-lcmap-conus-v13"
QUERY_URL="$QUERY_URL?&collections=$COLLECTION"
echo $QUERY_URL
```

```text
https://planetarycomputer.microsoft.com/api/stac/v1/search?&collections=usgs-lcmap-conus-v13
```

We’ll also want to filter our results to only return items that fall
within our spatiotemporal area of interest. We can set the temporal
range of our query using the `datetime` parameter, providing a date
formatted in [RFC 3339 Section
5.6](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format.
We’ll limit our query to only return data for 2021:

``` bash
DATETIME="2021-01-01/2021-12-31"
QUERY_URL="$QUERY_URL&datetime=$DATETIME"
echo $QUERY_URL
```

```text
https://planetarycomputer.microsoft.com/api/stac/v1/search?&collections=usgs-lcmap-conus-v13&datetime=2021-01-01/2021-12-31
```

We also need to limit the spatial range of our results, using a bounding
box in the [WGS 84](http://www.opengis.net/def/crs/OGC/1.3/CRS84)
coordinate reference system:

``` bash
WGS84_BBOX="-79.762,40.496,-71.856,45.013"
QUERY_URL="$QUERY_URL&bbox=$WGS84_BBOX"
echo $QUERY_URL
```

```text
https://planetarycomputer.microsoft.com/api/stac/v1/search?&collections=usgs-lcmap-conus-v13&datetime=2021-01-01/2021-12-31&bbox=-79.762,40.496,-71.856,45.013
```

This is a complete item search query string! If we visited this URL – or
accessed it via curl or another utility – we’d see a feature collection
listing metadata about all the available LCMAP rasters falling within
our area of interest. We could optionally use curl and
[jq](https://jqlang.github.io/jq/), if they’re installed, to take a peek
at what this JSON document looks like:

``` bash
curl -s $QUERY_URL | head -n 1 | jq > query.txt
head -n 18 query.txt
```

```text
{
    "type": "FeatureCollection",
    "features": [
    {
        "id": "LCMAP_CU_030007_2021_V13_CCDC",
        "bbox": [
        -72.93784998930636,
        39.594812916149024,
        -70.76420061777068,
        41.227407332200016
        ],
        "type": "Feature",
        "links": [
        {
            "rel": "collection",
            "type": "application/json",
            "href": "https://planetarycomputer.microsoft.com/api/stac/v1/collections/usgs-lcmap-conus-v13"
        },
```

Now that our query URL is constructed, we need to add a few
configuration options to inform GDAL we want to download data from this
query using the STACIT driver. We’ll start off by prepending `STACIT:`
in front of our query url, which we’ll also wrap in quotes (using `\"`
to make sure those quotes are preserved):

``` bash
QUERY_URL="STACIT:\"$QUERY_URL\""
echo $QUERY_URL
```

```text
STACIT:"https://planetarycomputer.microsoft.com/api/stac/v1/search?&collections=usgs-lcmap-conus-v13&datetime=2021-01-01/2021-12-31&bbox=-79.762,40.496,-71.856,45.013"
```

And last but not least, we’ll specify that we only want to download the
`lcpri` asset from each of the items returned by our query, by appending
`:asset=lcpri` to the end of this URL:

``` bash
ASSET="lcpri"
QUERY_URL="$QUERY_URL:asset=$ASSET"
echo $QUERY_URL
```

```text
STACIT:"https://planetarycomputer.microsoft.com/api/stac/v1/search?&collections=usgs-lcmap-conus-v13&datetime=2021-01-01/2021-12-31&bbox=-79.762,40.496,-71.856,45.013":asset=lcpri
```

We’ve now constructed the URL that we used in the one-liner at the start
of this tutorial! Let’s look at what all of those elements look like
when combined in a single chunk:

``` bash
QUERY_URL="https://planetarycomputer.microsoft.com/api/stac/v1/search"
COLLECTION="usgs-lcmap-conus-v13"
DATETIME="2021-01-01/2021-12-31"
WGS84_BBOX="-79.762,40.496,-71.856,45.013"
ASSET="lcpri"

QUERY_URL="$QUERY_URL?&collections=$COLLECTION"
QUERY_URL="$QUERY_URL&datetime=$DATETIME"
QUERY_URL="$QUERY_URL&bbox=$WGS84_BBOX"
QUERY_URL="STACIT:\"$QUERY_URL\""
QUERY_URL="$QUERY_URL:asset=$ASSET"
echo $QUERY_URL
```

```text
STACIT:"https://planetarycomputer.microsoft.com/api/stac/v1/search?&collections=usgs-lcmap-conus-v13&datetime=2021-01-01/2021-12-31&bbox=-79.762,40.496,-71.856,45.013":asset=lcpri
```

We’re now able to use this query URL with any GDAL utility, letting us
work with this remote data as if it were local. For instance, we can use
gdalinfo to get information about the URLs we’d use to download the data
we requested, as well as the extent, resolution, and CRS of this
dataset:

``` bash
gdalinfo $QUERY_URL
```

```text
Driver: VRT/Virtual Raster
Files: /vsicurl?pc_url_signing=yes&pc_collection=usgs-lcmap-conus-v13&url=https%3A//landcoverdata.blob.core.windows.net/lcmap/CU/V13/030007/2021/LCMAP_CU_030007_2021_20220721_V13_CCDC/LCMAP_CU_030007_2021_20220628_V13_LCPRI.tif
        /vsicurl?pc_url_signing=yes&pc_collection=usgs-lcmap-conus-v13&url=https%3A//landcoverdata.blob.core.windows.net/lcmap/CU/V13/030006/2021/LCMAP_CU_030006_2021_20220721_V13_CCDC/LCMAP_CU_030006_2021_20220628_V13_LCPRI.tif
        /vsicurl?pc_url_signing=yes&pc_collection=usgs-lcmap-conus-v13&url=https%3A//landcoverdata.blob.core.windows.net/lcmap/CU/V13/030005/2021/LCMAP_CU_030005_2021_20220721_V13_CCDC/LCMAP_CU_030005_2021_20220628_V13_LCPRI.tif
        /vsicurl?pc_url_signing=yes&pc_collection=usgs-lcmap-conus-v13&url=https%3A//landcoverdata.blob.core.windows.net/lcmap/CU/V13/029007/2021/LCMAP_CU_029007_2021_20220721_V13_CCDC/LCMAP_CU_029007_2021_20220628_V13_LCPRI.tif
        /vsicurl?pc_url_signing=yes&pc_collection=usgs-lcmap-conus-v13&url=https%3A//landcoverdata.blob.core.windows.net/lcmap/CU/V13/029006/2021/LCMAP_CU_029006_2021_20220721_V13_CCDC/LCMAP_CU_029006_2021_20220628_V13_LCPRI.tif
        /vsicurl?pc_url_signing=yes&pc_collection=usgs-lcmap-conus-v13&url=https%3A//landcoverdata.blob.core.windows.net/lcmap/CU/V13/029005/2021/LCMAP_CU_029005_2021_20220721_V13_CCDC/LCMAP_CU_029005_2021_20220628_V13_LCPRI.tif
        /vsicurl?pc_url_signing=yes&pc_collection=usgs-lcmap-conus-v13&url=https%3A//landcoverdata.blob.core.windows.net/lcmap/CU/V13/029004/2021/LCMAP_CU_029004_2021_20220721_V13_CCDC/LCMAP_CU_029004_2021_20220628_V13_LCPRI.tif
        /vsicurl?pc_url_signing=yes&pc_collection=usgs-lcmap-conus-v13&url=https%3A//landcoverdata.blob.core.windows.net/lcmap/CU/V13/028008/2021/LCMAP_CU_028008_2021_20220721_V13_CCDC/LCMAP_CU_028008_2021_20220628_V13_LCPRI.tif
        /vsicurl?pc_url_signing=yes&pc_collection=usgs-lcmap-conus-v13&url=https%3A//landcoverdata.blob.core.windows.net/lcmap/CU/V13/028007/2021/LCMAP_CU_028007_2021_20220721_V13_CCDC/LCMAP_CU_028007_2021_20220628_V13_LCPRI.tif
        /vsicurl?pc_url_signing=yes&pc_collection=usgs-lcmap-conus-v13&url=https%3A//landcoverdata.blob.core.windows.net/lcmap/CU/V13/028006/2021/LCMAP_CU_028006_2021_20220721_V13_CCDC/LCMAP_CU_028006_2021_20220628_V13_LCPRI.tif
        /vsicurl?pc_url_signing=yes&pc_collection=usgs-lcmap-conus-v13&url=https%3A//landcoverdata.blob.core.windows.net/lcmap/CU/V13/028005/2021/LCMAP_CU_028005_2021_20220721_V13_CCDC/LCMAP_CU_028005_2021_20220628_V13_LCPRI.tif
        /vsicurl?pc_url_signing=yes&pc_collection=usgs-lcmap-conus-v13&url=https%3A//landcoverdata.blob.core.windows.net/lcmap/CU/V13/028004/2021/LCMAP_CU_028004_2021_20220721_V13_CCDC/LCMAP_CU_028004_2021_20220628_V13_LCPRI.tif
        /vsicurl?pc_url_signing=yes&pc_collection=usgs-lcmap-conus-v13&url=https%3A//landcoverdata.blob.core.windows.net/lcmap/CU/V13/027008/2021/LCMAP_CU_027008_2021_20220721_V13_CCDC/LCMAP_CU_027008_2021_20220628_V13_LCPRI.tif
        /vsicurl?pc_url_signing=yes&pc_collection=usgs-lcmap-conus-v13&url=https%3A//landcoverdata.blob.core.windows.net/lcmap/CU/V13/027007/2021/LCMAP_CU_027007_2021_20220721_V13_CCDC/LCMAP_CU_027007_2021_20220628_V13_LCPRI.tif
        /vsicurl?pc_url_signing=yes&pc_collection=usgs-lcmap-conus-v13&url=https%3A//landcoverdata.blob.core.windows.net/lcmap/CU/V13/027006/2021/LCMAP_CU_027006_2021_20220721_V13_CCDC/LCMAP_CU_027006_2021_20220628_V13_LCPRI.tif
        /vsicurl?pc_url_signing=yes&pc_collection=usgs-lcmap-conus-v13&url=https%3A//landcoverdata.blob.core.windows.net/lcmap/CU/V13/027005/2021/LCMAP_CU_027005_2021_20220721_V13_CCDC/LCMAP_CU_027005_2021_20220628_V13_LCPRI.tif
        /vsicurl?pc_url_signing=yes&pc_collection=usgs-lcmap-conus-v13&url=https%3A//landcoverdata.blob.core.windows.net/lcmap/CU/V13/027004/2021/LCMAP_CU_027004_2021_20220721_V13_CCDC/LCMAP_CU_027004_2021_20220628_V13_LCPRI.tif
        /vsicurl?pc_url_signing=yes&pc_collection=usgs-lcmap-conus-v13&url=https%3A//landcoverdata.blob.core.windows.net/lcmap/CU/V13/026008/2021/LCMAP_CU_026008_2021_20220721_V13_CCDC/LCMAP_CU_026008_2021_20220629_V13_LCPRI.tif
        /vsicurl?pc_url_signing=yes&pc_collection=usgs-lcmap-conus-v13&url=https%3A//landcoverdata.blob.core.windows.net/lcmap/CU/V13/026007/2021/LCMAP_CU_026007_2021_20220721_V13_CCDC/LCMAP_CU_026007_2021_20220629_V13_LCPRI.tif
        /vsicurl?pc_url_signing=yes&pc_collection=usgs-lcmap-conus-v13&url=https%3A//landcoverdata.blob.core.windows.net/lcmap/CU/V13/026006/2021/LCMAP_CU_026006_2021_20220721_V13_CCDC/LCMAP_CU_026006_2021_20220629_V13_LCPRI.tif
        /vsicurl?pc_url_signing=yes&pc_collection=usgs-lcmap-conus-v13&url=https%3A//landcoverdata.blob.core.windows.net/lcmap/CU/V13/025007/2021/LCMAP_CU_025007_2021_20220721_V13_CCDC/LCMAP_CU_025007_2021_20220629_V13_LCPRI.tif
Size is 30000, 25000
Coordinate System is:
PROJCRS["AEA        WGS84",
    BASEGEOGCRS["WGS 84",
        DATUM["World Geodetic System 1984",
            ELLIPSOID["WGS 84",6378137,298.257223563,
                LENGTHUNIT["metre",1]]],
        PRIMEM["Greenwich",0,
            ANGLEUNIT["degree",0.0174532925199433]],
        ID["EPSG",4326]],
    CONVERSION["unnamed",
        METHOD["Albers Equal Area",
            ID["EPSG",9822]],
        PARAMETER["Latitude of false origin",23,
            ANGLEUNIT["degree",0.0174532925199433],
            ID["EPSG",8821]],
        PARAMETER["Longitude of false origin",-96,
            ANGLEUNIT["degree",0.0174532925199433],
            ID["EPSG",8822]],
        PARAMETER["Latitude of 1st standard parallel",29.5,
            ANGLEUNIT["degree",0.0174532925199433],
            ID["EPSG",8823]],
        PARAMETER["Latitude of 2nd standard parallel",45.5,
            ANGLEUNIT["degree",0.0174532925199433],
            ID["EPSG",8824]],
        PARAMETER["Easting at false origin",0,
            LENGTHUNIT["metre",1],
            ID["EPSG",8826]],
        PARAMETER["Northing at false origin",0,
            LENGTHUNIT["metre",1],
            ID["EPSG",8827]]],
    CS[Cartesian,2],
        AXIS["easting",east,
            ORDER[1],
            LENGTHUNIT["metre",1,
                ID["EPSG",9001]]],
        AXIS["northing",north,
            ORDER[2],
            LENGTHUNIT["metre",1,
                ID["EPSG",9001]]]]
Data axis to CRS axis mapping: 1,2
Origin = (1184415.000000000000000,2714805.000000000000000)
Pixel Size = (30.000000000000000,-30.000000000000000)
Corner Coordinates:
Upper Left  ( 1184415.000, 2714805.000) ( 80d32' 7.55"W, 46d33'11.84"N)
Lower Left  ( 1184415.000, 1964805.000) ( 81d58'10.65"W, 39d54'46.32"N)
Upper Right ( 2084415.000, 2714805.000) ( 69d16'10.42"W, 44d45'58.75"N)
Lower Right ( 2084415.000, 1964805.000) ( 71d40'23.06"W, 38d18' 3.23"N)
Center      ( 1634415.000, 2339805.000) ( 75d50'28.69"W, 42d29'27.07"N)
Band 1 Block=128x128 Type=Byte, ColorInterp=Palette
    NoData Value=0
```

Or we can use gdalwarp to download these assets and merge them into a
single file:

``` bash
OUTPUT_FILE="lcpri_nys.tif"

gdalwarp $QUERY_URL $OUTPUT_FILE
```

```text
Processing STACIT:"https://planetarycomputer.microsoft.com/api/stac/v1/search?&collections=usgs-lcmap-conus-v13&datetime=2021-01-01/2021-12-31&bbox=-79.762,40.496,-71.856,45.013":asset=lcpri [1/1] : 0Using internal nodata values (e.g. 0) for image STACIT:"https://planetarycomputer.microsoft.com/api/stac/v1/search?&collections=usgs-lcmap-conus-v13&datetime=2021-01-01/2021-12-31&bbox=-79.762,40.496,-71.856,45.013":asset=lcpri.
...10...20...30...40...50...60...70...80...90...100 - done.
```

The STACIT driver is smart enough to know how to follow the URLs
provided by this feature collection to find and download our desired
assets, and will even automatically handle authorizing our requests to
the Planetary Computer.
