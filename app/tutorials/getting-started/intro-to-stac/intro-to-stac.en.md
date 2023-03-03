---
title: "Intro to STAC: an Overview of the Specification"
description: This tutorial provides an overview of the STAC specification, a breakdown of each STAC component, and how they are integrated together.
---
# The STAC Specification

The Spatial Temporal Asset Catalog (STAC) specification was designed to establish a standard, unified language to talk about geospatial data, allowing it to more easily searchable and queryable.

STAC has been designed to be simple, flexible, and extensible. STAC is a network of json files that reference other json files, with each json file adhering to a specific core specification depending on what STAC component it is describing. This core json format can also be customized to fit differing needs, making the STAC specification highly flexible and adaptable.

Therefore, if the STAC specification seems 'light', that is by design. Through this flexibility,  different domains and tools can easily utilize the STAC specification and make it their own.

The [Extensions section of the spec](./extentions-intro-doc.ipynb) is where the community collaborates on more detail about specific data types and new functionality.

The full STAC Specification can be found in markdown pages on GitHub. The content on this site will give you a strong foundation in STAC trhough basic theoretical knowledge and pratical expereince with STAC in the Tutorials section. If you are looking for the more thorough and more technical reference, visit the [STAC Specification on GitHub](https://github.com/radiantearth/stac-spec/).

## SpatioTemporal Asset

Before diving into the components of the STAC Specification, let's discuss the SpatioTemporal Asset.

A `SpatioTemporal Asset` is any file that represents information about the earth captured in a certain space and time. Examples include Imagery (from satellites, planes and drones), SAR, Point Clouds (from LiDAR, Structure from Motion, etc), Data Cubes, Full Motion Video, and data derived from any of those. The key is that the GeoJSON is not the actual 'thing', but instead references files and serves as an index to the 'assets'.

## STAC Components

There are three component specifications that together make up the core SpatioTemporal Asset Catalog specification:

1. Item
2. Catalog
3. Collection

Each component can be used alone, but they work best in concert with one another.

An `Item` represents a single spatiotemporal asset as GeoJSON so it can be searched. The `Catalog` specification provides structural elements, to group Items and Collections. `Collections` are catalogs, that add more required metadata and describe a group of related Items. Now, let's dive into each one of these components a bit more in depth.

The STAC API specification builds on top of that core, but is out of scope for this overview. To Learn more about the STAC API, visit the Intro to STAC API section of the documentation.

---

### STAC Item

A STAC Item is the foundational building block of STAC. It is GeoJSON feature supplemented with additional metadata that enables clients to traverse through catalogs. Since an Item is a GeoJSON, it can be easily read by any modern GIS or geospatial library, and it describes a SpatioTemporal Asset. The STAC Item JSON specification uses the GeoJSON geometry to describe the location of the asset, and then includes additional information:

- the time the asset represents;
- a thumbnail for quick browsing;
- asset links, to enable direct download or streaming access of the asset;
- relationship links, allowing users to traverse other related resources and STAC Items.

A STAC Item can contain additional fields and JSON structures to communicate more information about the asset, so it can be easily searched. STAC provides a core set of Common Metadata and there is a wider community working on a variety of STAC Extensions that provide shared metadata for more specific domains. Both aim to describe data with well known, well defined terms to enable consistent publishing and better search. 

<div align="center">
<img src= "/public/intro-images/geojson-example.png" alt= "Example GeoJSON" width=100% height=100% title="Example GeoJSON">
    
_Example of a GeoJSON_
</div>


<div align="center">
<img src= "/public/intro-images/STAC-Item.jpeg" alt= "STAC Item Specification" width=100% height=100% title="STAC Item Specification">

 _STAC Item Specification. The fields in gray text (`stac_extention` and `collection`) represent optional fields._
</div>

To see the full documenation of the STAC Item: https://github.com/radiantearth/stac-spec/tree/master/item-spec.

---

### STAC Catalog

A Catalog is usually the starting point for navigating a STAC. A `catalog.json` file contains links to some combination of other Catalogs, Collections, and/or Items. This combination is quite variable and flexible depending on how the data is being organized. There are no restrictions on the way catalogs are organized. Most implementations use a set of 'sub-Catalogs' (a Catalog that is linked to from another Catalog) to group the Items in some sensible way. It can be easily extended, for example to include additional metadata to further describe its holdings, as the STAC Collection does.

<div align="center">
<img src= "/public/intro-images/STAC-Catalog.jpeg" alt= "STAC Catalog Specification" width=100% height=100% title="STAC Catalog Specification">

_STAC Catalog Specification. The fields in white text (`title` and `stac_extentions`) represent optional fields._
</div>

A catalog may only reference a group of Items, it may link toother sub-catalogs and no Collections, or a combination of Catalogs and Collections, etc.

We can think of it like a directory tree on a computer.

<div align="center">
<img src= "/public/intro-images/Catalog-layout.jpeg" alt= "STAC Catalog Layout" width=100% height=100% title="STAC Catalog Layout">

_STAC Catalog Layout_
</div>

```json
{
    "stac_version": "1.0.0",
    "type": "Catalog",
    "id": "20201211_223832_CS2",
    "description": "A simple catalog example",
    "links": []
}
```

---

### STAC Collection

A STAC Collection builds upon the STAC Catalog specification to include additional metadata about a set of Items that exist as part of the collection. It extends the parent Catalog by layering on additional fields to enable description of things like the spatial and temporal extent of the data, the license, keywords, providers, etc. Therefore, it can easily be extended for additional collection level metadata. It is used standalone by parts of the STAC community, as a lightweight way to describe data holdings.

<div align="center">
<img src= "/public/intro-images/STAC-Collection.jpeg" alt= "STAC Collection" width=100% height=100% title="STAC Collection">

_STAC Collection Specification. In addition to the optional fields from the STAC Catalog, the fields in white text (`providers`, `keywords`, `assets`, and `summary`) represent optional fields. Note that the `summary` field is strongly reccomended._
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

To learn more about STAC Collection specifications: https://github.com/radiantearth/stac-spec/tree/master/collection-spec.

---

### Next Steps

In the following sections, you will find tutorials that will teach you how to work with STAC using Python and QGIS.

#### Join the conversation

If you have any questions, you’re welcome to ask our community on [Gitter](https://app.gitter.im/#/room/#SpatioTemporal-Asset-Catalog_Lobby).