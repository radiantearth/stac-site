---
title: Introduction to Using the QGIS STAC API Browser Plugin
description: How to Use the QGIS STAC API Browser Plugin
---
In the [previous tutorial](1-install-stac-api-browser-qgis-plugin.md), you learned how to install the QGIS STAC API Browser plugin. Now, let's learn how to use it.

# Introduction to Using the QGIS STAC API Browser Plugin

The STAC QGIS plugin supports searching for STAC resources, loading and downloading STAC items, and 
retrieving information about the STAC API services.

It is recommended to use the STAC API services that adhere and conform to the standard STAC specification and practices in order to fully utilize the functionality of the plugin features.

## Plugin Functionality

The plugin features can be categorized in two parts: (1) searching for STAC Items and (2) accessing STAC Assets.

### (1) Search STAC Items

There are three foundational STAC API specifications: [STAC API - Core](https://github.com/radiantearth/stac-api-spec/tree/main/core), [STAC API - Features](https://github.com/radiantearth/stac-api-spec/tree/main/ogcapi-features), and [STAC API - Item Search](https://github.com/radiantearth/stac-api-spec/tree/main/item-search).
The QGIS plugin utilizes the STAC API Item Search Specification. The plugin also allows you to utilize the following filters during your STAC Item object search:

- **Date Filter** - search for either a single temporal instance or items within a temporal range of any size.
- **Spatial Extent Filter** - filter the spatial extent of the search results by providing a spatial bounding box in lat/long (WGS84, EPSG:4326).
- **Advanced Filter** - utilize any of the STAC API filters for advanced queries explained on the [stac-api-spec](https://github.com/radiantearth/stac-api-spec/tree/master/fragments/filter).

### (2) Access STAC Assets

After applying a STAC Item search, you will be able to view and download specific STAC Assets from the item results.

Let's dive into applying the functionality of the QGIS STAC plugin.

## Launching the STAC API Browser Plugin

Three methods can be used to launch the plugin in QGIS:

### (1) QGIS Toolbar

Once you have installed the plugin, there will be a plugin entry with the STAC APIs Browser icon in the QGIS toolbar.  
Click on the icon to open the plugin window.

![QGIS Toolbar](/public/qgis-images/toolbar.png)
_QGIS Toolbar_

![QGIS Toolbar Version 3.26](/public/qgis-images/toolbar2.png)
_QGIS Toolbar Version 3.26_

### (2) QGIS Plugins Menu

QGIS Toolbar > **Plugins** tab > **STAC API Browser Plugin** > **Open STAC API Browser**.

![GIF showing how to use plugins menu to open the STAC plugin](/public/qgis-images/plugin_menu.gif)
_GIF showing how to use plugins menu to open the STAC plugin._

### (3) QGIS Web Menu

QGIS Toolbar > **Web** tab > **STAC API Browser Plugin** > **Open STAC API Browser**.

![GIF showing how to use QGIS web menu to open the STAC plugin](/public/qgis-images/web_menu.gif)
_GIF showing how to use QGIS web menu to open the STAC plugin._

## Adding a STAC API Connection

By default, the STAC API Browser plugin provides some predefined STAC API service connections with the plugin's installation.

To add a new STAC API service connection, click the **New** button and add the required details.

The connection dialog contains a **API Capabilities** field which can be used to set the connection to use
a `SAS Token` to [authorize requests to Azure Blob Storage](https://planetarycomputer.microsoft.com/docs/concepts/sas/).
To learn more about the Microsoft SAS Token, visit [Microsoft's documentation](https://planetarycomputer.microsoft.com/docs/concepts/sas/).

The **Advanced** section contains a list of the conformances classes in which the given STAC API adheres.

If you are creating a new API connection and the conformance class list is empty, click the **Get conformance classes** button to fetch the conformance
classes. The image below shows the [Planetary Computer STAC API](https://planetarycomputer.microsoft.com/api/stac/v1)
with a list of conformances classes that have already been fetched.

![Connection dialog with a Microsoft Planetary Computer STAC API details](/public/qgis-images/add_stac_api_connection.png)
_Connection dialog with a Microsoft Planetary Computer STAC API details._

Once all the details have been filled in, click **OK** to save the connection.

## Search Items Using the Search Filters

### Filter by date

Fill out your desired date range.

### Extent

To define a spatial extent to filter your search results, you have a few options:

1. Manually enter specific lat/long coordinates.
2. Let QGIS calculate an extent from:
    - **Layer**: a specific layer of your choice
    - **Layout Map**: the map layout
    - **Bookmark**: a predifined [QGIS spatial bookmark](https://docs.qgis.org/2.14/en/docs/user_manual/introduction/general_tools.html#spatial-bookmarks)
3. Use the current **Map Canvas Extent**.
4. Draw a box on the canvas of the area in which you would like to limit the search (**Draw on Canvas** button).

### Advanced filter

Using the **Advanced filter**, you can query data based on metadata of the assets such as the percentage cloud cover. STAC query tool defines the standards for performing this filtering. For instance, to get tiles whose cloud cover is less than ten percent, we would use the query below:

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

When using the **Advanced filter**, the available filter languages are based on the supported STAC API filter languages. When *STAC_QUERY* is selected, then the filter input will be treated as a [STAC QUERY](https://github.com/radiantearth/stac-api-spec/tree/master/fragments/query). If *CQL JSON* or *CQL2 JSON* is selected, then the filter will be treated as a [CQL FILTER](https://github.com/radiantearth/stac-api-spec/tree/master/fragments/filter).

![Search box with available filters selected](/public/qgis-images/available_filters_planetary.png)  
_Search box with available filters selected._

**NOTE**: the box must be checked by a given filter for it to be used in the search.

## View the Search Results

Once you have specified all the filters that you want to use to query the data, click on the **Results** tab to see a list of all the items that fit your search criteria. From here, you can select your desired item to explore. The the thumbnail and the **Date acquired** provided in the preview box can help you decide your selection.

![Example search result items](/public/qgis-images/search_results_planetary.png)
_Example of items in search result_

## View the Item's Footprint and Assets

The plugin allows you to load STAC Item's footprint and assets in QGIS as map layers.

### Adding the Item Footprint

Click the **Add Footprint** button to add the footprint of an item into the QGIS canvas.
The footprint map layer will be loaded into QGIS.

![Image showing the button used for adding the STAC item footprint](/public/qgis-images/add_footprint_planetary.png)
_Image showing the button used for adding the STAC item footprint._

### Adding and downloading Item's assets

The plugin currently supports loading assets as [COG](https://github.com/cogeotiff/cog-spec/blob/master/spec.md) layers in QGIS.
To add the assets into QGIS canvas, click the **View assets** button from the required result item.

![Image showing the button used for viewing the STAC item assets](/public/qgis-images/view_assets_planetary.png)
_Image showing the button used for viewing the STAC item assets._

After clicking the **View Assets** button, the assets dialog box will open. From the asset list, click the **Add assets as layer** button to add the item into QGIS as a COG layer. To download the asset, click the **Download asset** button.

![Assets dialog box](/public/qgis-images/assets_dialog.png)
_Assets dialog box_

Below is the result of selecting **Add assets as layer**, which added a COG tile to the QGIS map canvas. You are now able to utilize the STAC API Browser plugin to add whatever datasets available through the STAC API Browser that you desire!

![One of the added asset as a QGIS map layer](/public/qgis-images/added_asset_planetary.png)
_Asset added as a QGIS map layer._