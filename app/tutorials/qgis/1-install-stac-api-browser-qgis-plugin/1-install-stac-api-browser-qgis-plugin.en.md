---
title: Install the QGIS STAC API Browser Plugin
description: How to Install the QGIS STAC API Browser Plugin
---
# Install the QGIS STAC API Browser Plugin

In this introduction tutorial, you will learn how to install the STAC plugin into [QGIS](https://qgis.org/en/site/). This and the following tutorial are adapted from the [QGIS STAC API Browser site](https://stac-utils.github.io/qgis-stac-plugin/).

To install the plugin, you will launch the QGIS application and open the Plugin Manager:

![QGIS Plugin Manager from Navigation Bar](/public/qgis-images/qgis-plugin-manager.png)
_QGIS Plugin Manager from Navigation Bar_

## Primary Download Method: QGIS Plugin Repository

The plugin is available in the QGIS Official Plugin Repository.

1. Search for **STAC API Browser** in the **All** section of the Plugin Manager.
2. Click on the **STAC API Browser** result. A description page of the plugin will then show up.
3. Click the **Install Plugin** button at the bottom of the dialog box to install the plugin.

![Plugin entry in the QGIS Plugin Manager](/public/qgis-images/install-from-repository.png)
_Plugin entry in the QGIS Plugin Manager_
<br/><br/>

<div style="background-color:rgba(181, 216, 229, 0.8); text-align:center; vertical-align: top; padding:10px; ml:5px; 0;">
If you are simply looking for the standard plugin download, you can stop this tutorial here. If you are needing to download a past or future version of the plugin for a specific use case, continue on to see the pre-release download methods. 
</div>


## Alternative Download Methods

The following two download methods are for obtaining pre-release or deprecated versions of the STAC API Browser. 

For example, these installation methods could be preferred if there is a pre-released version of the STAC QGIS plugin that you would like to use that is not yet available in the official QGIS Plugin Repository. It is important to note that _QGIS does not recommend installing deprecated plugins unless there are no alternatives available_.

### From a ZIP file

1. Visit [https://github.com/stac-utils/qgis-stac-plugin/releases](https://github.com/stac-utils/qgis-stac-plugin/releases) and select the desired version of the plugin.

2. Download your selected release ZIP file.

3. From the **Install from ZIP** page in the QGIS plugin manager, add the downloaded ZIP file.

4. Click the **Install Plugin** button.

![Install from ZIP file](/public/qgis-images/install-from-zip.png)
_Install plugin from ZIP file_

### From the Creation of a Custom Plugin Repository

The **STAC API Browser** plugin is also available through a custom plugin repository. This method is comparable to the ZIP file installation method, but can only be used for downloading pre-release versions of the plugin (and not deprecated plugin versions).

1. Navigate to the **Settings** section of the Plugin Manager.

2. Check the **Show also experimental plugins** box.
    - The plugin versions available through the custom repository may be flagged experimental because they might contain plugin versions that have not yet been approved by QGIS for official use.

3. Click the **Add** button in the **Plugin Repositories** box.

4. Select a name for the plugin (e.g. "Custom STAC Plugin Repository").

5. In the URL section, use [https://stac-utils.github.io/qgis-stac-plugin/repository/plugins.xml](https://stac-utils.github.io/qgis-stac-plugin/repository/plugins.xml) to create a new plugin repository.

![Adding a custom QGIS plugin repository](/public/qgis-images/add-repository.png)
_Adding a custom QGIS plugin repository_

6. Click **OK** to add the custom plugin repository.