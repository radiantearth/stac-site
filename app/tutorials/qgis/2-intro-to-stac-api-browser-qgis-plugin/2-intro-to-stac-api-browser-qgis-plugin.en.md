---
title: Introduction to Using the QGIS STAC API Browser Plugin
description: How to Use the QGIS STAC API Browser Plugin
---
In the [previous tutorial](/en/tutorials/1-install-stac-api-browser-qgis-plugin/index.html), you learned how to install the QGIS STAC API Browser plugin. Now, let's learn how to use it.

# Introduction to Using the QGIS STAC API Browser Plugin

Through STAC, you are able to access a large amount of diverse geospatial data. Using the QGIS STAC Plugin, you can easily search through all the data available through the STAC Browser. Once you have found your desired data through your search, you can download or even directly add the data to your QGIS project.

## Plugin Functionality

The plugin features can be categorized into two parts: (1) searching for STAC Items and (2) accessing STAC Assets.

### (1) Search STAC Items

An Item is the atomic unit of data that can be searched in STAC. Each item contains STAC Asset(s) (e.g., satellite imagery, derived data, DEMs). Typically, an item contains asset(s) that is/are often some form of imagery of the earth, but it could be any type of geospatial data. A STAC Item is cataloged with metadata that makes it highly searchable. Through the QGIS Plugin, you will be able to search by the datetime, geometry, and additional filters to find the data you desire.

To better understand the architecture of STAC, see the [Intro to STAC Tutorial](/app/tutorials/getting-started/intro-to-stac/intro-to-stac.en.md).

### (2) Access STAC Assets

Within each STAC Item are one or multiple STAC Assets.

A "spatiotemporal asset" is any file that represents information about the Earth at a certain place and time. Usually, the asset includes a data file, a metadata file, and potentially additional helper files to better catalog the data. The data file of the asset is what you will be downloading or adding to your QGIS project.

After applying a STAC Item search, you will be able to view and download specific STAC Assets from the item results.

Let's dive into applying the functionality of the QGIS STAC plugin.

## Launching the STAC API Browser Plugin

Once you have installed the plugin, there will be a plugin entry with the STAC APIs Browser icon in the QGIS toolbar. 
Click on the icon to open the plugin window.

![QGIS Toolbar](/public/qgis-images/toolbar.png)
_QGIS Toolbar_

![QGIS Toolbar Version 3.26](/public/qgis-images/toolbar2.png)
_QGIS Toolbar Version 3.26_

When you click on this icon, this window will pop up:

![STAC API Browser](/public/qgis-images/plugin_initial.png)
_STAC API Browser_

You can also launch the plugin via the QGIS Plugins Menu as well as the QGIS Web Menu:

- QGIS Toolbar > **Plugins** tab > **STAC API Browser Plugin** > **Open STAC API Browser**.

- QGIS Toolbar > **Web** tab > **STAC API Browser Plugin** > **Open STAC API Browser**.

## Adding a STAC API Connection

By default, the STAC API Browser plugin provides some predefined STAC API service connections with the plugin's installation.

To add a new STAC API service connection, click the **New** button and add the required details.

The connection dialog contains an **API Capabilities** field which can be used to set the connection to use
a `SAS Token` to [authorize requests to Azure Blob Storage](https://planetarycomputer.microsoft.com/docs/concepts/sas/). While you are able to browse all STAC Items without authentification, some data providers require you to have authentification to download the data. This authentication is typically in the form of a free login. To learn more about the Microsoft SAS Token, visit [Microsoft's documentation](https://planetarycomputer.microsoft.com/docs/concepts/sas/).

The image below shows the [Planetary Computer STAC API](https://planetarycomputer.microsoft.com/api/stac/v1).

![Connection dialog with a Microsoft Planetary Computer STAC API details](/public/qgis-images/add_stac_api_connection.png)
_Connection dialog with a Microsoft Planetary Computer STAC API details._

Once all the details have been filled in, click **OK** to save the connection.

## Example Search

Now, let's dive into performing a search using the plugin. For this example, we will be searching Microsoft's Planetary Computer. For our search area, let's use Microsofts Seattle Headquarters and select only imagery from [Landsat Collection 2 Level-2](https://www.usgs.gov/landsat-missions/landsat-collection-2) in June of 2022.

## Search Items Using the Search Filters

The plugin also allows you to utilize filters during your STAC Item object search.

### Date Filter

Search for either a single temporal instance or items within a temporal range of any size.

Fill out your desired date range in the **Filter by date** section.

### Spatial Extent Filter

Extent

To define a spatial extent to filter your search results, you have a few options:

1. Manually enter specific lat/long coordinates.
2. Let QGIS calculate an extent from:
   - **Layer**: a specific layer of your choice
   - **Layout Map**: the map layout
   - **Bookmark**: a predefined [QGIS spatial bookmark](https://docs.qgis.org/2.14/en/docs/user_manual/introduction/general_tools.html#spatial-bookmarks)
3. Use the current **Map Canvas Extent**.
4. Draw a box on the canvas of the area in which you would like to limit the search (**Draw on Canvas** button).

### Advanced filter

You can utilize any of the STAC API filters for advanced queries explained on the [stac-api-spec](https://github.com/radiantearth/stac-api-spec/tree/master/fragments/filter).

Using the **Advanced filter**, you can query data based on metadata of the assets such as the percentage cloud cover. STAC query tool defines the standards for performing this filtering. For instance, to get tiles whose cloud cover is less than ten percent using the [STAC Query format](https://github.com/radiantearth/stac-api-spec/tree/master/fragments/query), we would use the query below:

```python
{
 "query": {
   "eo:cloud_cover": {
     "gte": 0,
     "lte": 10
   }
 }
}
```

When using the **Advanced filter**, the available filter languages are based on the supported STAC API filter languages. When *STAC_QUERY* is selected, then the filter input will be treated as a [STAC Query](https://github.com/radiantearth/stac-api-spec/tree/master/fragments/query). If *CQL JSON* or *CQL2 JSON* is selected, then the filter will be treated as a [CQL FILTER](https://github.com/radiantearth/stac-api-spec/tree/master/fragments/filter).

![Search box with available filters selected](/public/qgis-images/available_filters_planetary.png) 
_Search box with available filters selected._

**NOTE**: the box must be checked by a given filter for it to be used in the search.

## View the Search Results

Once you have specified all the filters that you want to use to query the data, click on the **Results** tab to see a list of all the items that fit your search criteria. From here, you can select your desired item to explore. The thumbnail and the **Date acquired** provided in the preview box can help you decide your selection.

![Example search result items](/public/qgis-images/search_results_planetary.png)
_Example of items in search result_

## View the Footprints and Assets

The plugin allows you to load STAC Item's footprint and assets in QGIS as map layers.

### Adding the Footprints

You have the option to add the Item footprint to the QGIS canvas, which allows you to see the outline of where the asset exists in space. The footprint gives you an idea of if this data will be in your area of interest and therefore allows you to evaluate the fitness of the data before adding it to your project or downloading the data.

This tool is particularly useful if you plan to download the dataset instead of using the COG in QGIS.

Click the **Select Footprint** button to add the footprint of an item to the QGIS canvas. The footprint map layer (simply an outline of the data’s extent) will be loaded into QGIS. Now, you can better see the spatial extent of this data.

![Image showing the button used for adding the STAC item footprint](/public/qgis-images/add_footprint_planetary.png)
_Image showing the button used for adding the STAC item footprint._

### Viewing the Footprints

Once you hit the **Add the selected footprint(s) (3)** button, you will see a box or outline of the image footprints appear on the QGIS map. 

![Image showing the 3 image footprints on the QGIS map](/public/qgis-images/view_footprints.png)
_Image showing the 3 image footprints on the QGIS map_

Based on looking at these footprints, it appears`LC09_L2SP_047026_20220625_02_T1`does not cover the area of Seattle we are targeting. Between the two that do cover Seattle, let's select the Landsat 9 image (the blue footprint:`LC09_L2SP_047027_20220625_02_T1`) over the Landsat 8 image  ( the red footprint:`LC08_L2SP_046027_20220626_02_T1`). 

### Adding and downloading Item's assets

The plugin currently supports loading assets as [Cloud-Optimized GeoTIFFs (COGs)](https://github.com/cogeotiff/cog-spec/blob/master/spec.md) layers in QGIS. A COG is a GeoTIFF file that has been stored in a manner that makes it easier for you to access parts of the data that you need for your analysis without needing to download the entire file that includes areas in the GeoTIFF that are not of interest to you. Many STAC catalogs have data stored as COG’s, but this is not a requirement of STAC and you are still able to download the entire GeoTIFF if that is preferred.

To add the assets to the QGIS canvas, click the **View assets** button from the required result item. This button will display the COG of the dataset. 

![Image showing the button used for viewing the STAC item assets](/public/qgis-images/view_assets.png)
_Image showing the button used for viewing the STAC item assets._

After clicking the **View Assets** button, the assets dialog box will open. From the asset list, click the **Add assets as layer** button to add the item into the QGIS as a COG layer. To download the asset, click the **Download asset** button.

![Assets dialog box](/public/qgis-images/assets_dialog.png)
_Assets dialog box_

Below is the result of clicking **Add selected assets as layers**, which added the 4 selected assets to the QGIS map canvas. In the left of this image, we can see the 4 layers we added the the map in the Layers legend. In the right of the image, we see the Near Infrared band image on top. Now, you can use QGIS to do any analysis you wish on this data.

 You are now able to utilize the STAC API Browser plugin to add whatever datasets available through the STAC API Browser that you desire.

![One of the added assets as a QGIS map layer](/public/qgis-images/added_asset.png)
_Asset added as a QGIS map layer._
