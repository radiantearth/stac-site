---
title: "Intro to STAC: an Overview of the Specification"
description: This tutorial provides an overview of the STAC specification, a breakdown of each STAC component, and how they are integrated together.
---
# The STAC Specification

The SpatioTemporal Asset Catalog (STAC) specification was designed to establish a standard, unified language to talk about geospatial data, allowing it to be more easily searchable and queryable.

STAC has been designed to be simple, flexible, and extensible. STAC is a network of JSON files that reference other JSON files, with each JSON file adhering to a specific core specification depending on which STAC component it is describing. This core JSON format can also be customized to fit differing needs, making the STAC specification highly flexible and adaptable.

Therefore, if the STAC specification seems 'light', that is because it _is_ light-- by design. Through this flexibility,  different domains and tools can easily utilize the STAC specification and make it their own.

The [Extensions section of the spec](./extentions-intro-doc.ipynb) is where the community collaborates on more detail about specific data types and new functionality.

The full STAC specification can be found in markdown pages on GitHub. The content on this site will give you a strong foundation in STAC through basic theoretical knowledge and practical experience with STAC in this [Tutorials section](/en/tutorials/index.html). If you are looking for a more thorough and technical reference, visit the [STAC Specification on GitHub](https://github.com/radiantearth/stac-spec/).

## SpatioTemporal Asset

Before diving into the components of the STAC specification, let's discuss the SpatioTemporal Asset.

A `SpatioTemporal Asset` is any file that represents information about the Earth captured in a certain place and at a particular time. Examples include spatiotemporal data derived from imagery (from satellites, airplanes, and drones), Synthetic Aperture Radar (SAR), point clouds (from LiDAR, structure from motion, etc.), data cubes, and full-motion video. The key is that the GeoJSON is not the actual 'thing', but instead references files and serves as an index to the STAC Assets.

## STAC Components

There are three component specifications that together make up the core SpatioTemporal Asset Catalog specification. These components are:

1. Item
2. Catalog
3. Collection

Each component can be used alone, but they work best in concert with one another.

A STAC Item represents one or more spatiotemporal assets as GeoJSON so that it can be easily searched. The STAC Catalog specification provides structural elements to group STAC Items and Collections. STAC Collections are catalogs that add more required metadata and describe a group of related items. Now, let's dive into each one of these components a bit more in-depth.

The STAC API specification builds on top of that core but is out of scope for this overview. To learn more about the STAC API, visit the [STAC API GitHub (stac-api-spec)](https://github.com/radiantearth/stac-api-spec/).

---

### STAC Item

A STAC Item is the foundational building block of STAC. It is a GeoJSON feature supplemented with additional metadata that enables clients to traverse through catalogs. Since an item is a GeoJSON, it can be easily read by any modern GIS or geospatial library. One item can describe one or more SpatioTemporal Asset(s). For example, a common practice of using STAC for imagery is that each band in a scene is its own STAC Asset and there is one STAC Item to represent all the bands in a single scene.

The STAC Item JSON specification uses standard GeoJSON fields as well as a few additional informational fields to describe the asset(s) more thoroughly. The figure below lists the fields of the STAC Item JSON. The in-depth descriptions of these fields can be found in [this table](https://github.com/radiantearth/stac-spec/blob/master/item-spec/item-spec.md#item-fields).

<div align="center">
<img src= "/public/images-original/intro-images/STAC-Item.jpeg" alt= "STAC Item Specification" width=100% height=100% title="STAC Item Specification">

 _STAC Item Specification. The fields in the gray text ('stac_extention' and 'collection') represent optional fields._
</div>

Below is an example of an image footprint and its associated GeoJSON file. If this example was to be transformed into STAC, the imagery's bands would become the STAC Assets and the GeoJSON contents would be combined with additional fields to describe the associated spatiotemporal assets and become the STAC Item.

<div align="center">
<img src= "/public/images-original/intro-images/geojson-example.png" alt= "Example GeoJSON" width=100% height=100% title="Example GeoJSON">
    
_Example of an image footprint (left) and its associated GeoJSON file (right)._
</div>

To see the full documentation of the STAC Item: [https://github.com/radiantearth/stac-spec/tree/master/item-spec](https://github.com/radiantearth/stac-spec/tree/master/item-spec).

---

### STAC Catalog

A Catalog is usually the starting point for navigating a STAC. A `catalog.json` file contains links to some combination of other STAC Catalogs, Collections, and/or Items.

We can think of it like a directory tree on a computer.

<div align="center">
<img src= "/public/images-original/intro-images/Catalog-layout.jpeg" alt= "STAC Catalog Layout" width=100% height=100% title="STAC Catalog Layout">

_STAC Catalog Layout_
</div>

There are no restrictions on the way STAC Catalogs are organized. Therefore, the combination of STAC components within a STAC Catalog is quite variable and flexible. Most implementations use a set of 'sub-catalog(s)' that group the items in some sensible way. It can be easily extended, for example, to include additional metadata to further describe its holdings, as the STAC Collection does.

 The figure below lists the fields of the STAC Catalog JSON. The in-depth descriptions of these fields can be found in [this table](https://github.com/radiantearth/stac-spec/blob/master/catalog-spec/catalog-spec.md#catalog-fields).

<div align="center">
<img src= "/public/images-original/intro-images/STAC-Catalog.jpeg" alt= "STAC Catalog Specification" width=100% height=100% title="STAC Catalog Specification">

_STAC Catalog Specification. The fields in white text ('title' and 'stac_extentions') represent optional fields._
</div>

Here is an example of the basic components of a `catalog.json` file:
```json
{
    "stac_version": "1.0.0",
    "type": "Catalog",
    "id": "20201211_223832_CS2",
    "description": "A simple catalog example",
    "links": []
}
```

To see the full documentation of the STAC Catalog specification: [https://github.com/radiantearth/stac-spec/tree/master/catalog-spec](https://github.com/radiantearth/stac-spec/tree/master/catalog-spec).

---

### STAC Collection

A STAC Collection builds upon the STAC Catalog specification to include additional metadata about a set of items that exist as part of the collection. It extends the parent catalog by adding additional fields to enable the description of information like the spatial and temporal extent of the data, the license, keywords, providers, etc. Therefore, it can easily be extended for additional collection-level metadata.

<div align="center">
<img src= "/public/images-original/intro-images/STAC-Collection.png" alt= "STAC Collection" width=100% height=100% title="STAC Collection">

_STAC Collection Specification. In addition to the optional fields from the STAC Catalog, the fields in white text ('providers', 'keywords', 'assets', and 'summaries') represent optional fields. Note that the 'summaries' field is strongly recommended._
</div>
    
```json
{
    "stac_version": "1.0.0",
    "type": "Collection",
    "license": "ISC",
    "id": "20201211_223832_CS2",
    "description": "A simple collection example",
    "links": [],
    "extent": {},
    "summaries": {}
}
```

To see the full documentation of the STAC Collection specification: [https://github.com/radiantearth/stac-spec/tree/master/collection-spec](https://github.com/radiantearth/stac-spec/tree/master/collection-spec).

---

### Next Steps

In the following sections, you will find tutorials that will teach you how to work with STAC using Python and QGIS.

#### Join the conversation

If you have any questions, you’re welcome to ask our community on [CNG Discourse](https://cng.discourse.group/c/stac/15).