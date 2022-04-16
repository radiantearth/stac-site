const { snippet, codeSnippet, route } = require('../_util');

const hero = {
    preheading: {
        en: 'About STAC',
        'lo-ip': 'Lorem',
    },
    heading: {
        en: 'Frequently Asked Questions',
        'lo-ip': 'Ipsum Dolor',
    },
    body: {
        en: `We get a lot of questions about STAC, here we've compiled a list of some of the ones we're asked most often.`,
        'lo-ip': 'Lorem ipsum dolor',
    },
};

const content = {
    en: `
## What is the relationship to OGC’s WFS 3 specification?

STAC intends to be fully compliant with the upcoming WFS 3 specification including implementing WFS 3’s query methods. STAC has ended up a bit 'ahead' of some of what WFS 3 has specified so far, so there may be some divergences in the short term. But the ideal situation for STAC is that the STAC API eventually is no longer necessary - it would just be a WFS 3 with a curated set of extensions that serve up STAC Items.
     
## I have geospatial raster data, should I use STAC?

Yes! So long as you can address your data in space and time and link directly to your data.

## I have vector data, should I use STAC?
    
Yes! Vector data can in principle be handled with STAC, but it's not as well defined as for raster data. STAC it closely aligned with OGC API - Features though and you should have a look at that specification, too.
        
## I have non-geospatial data, should I use STAC?
    
No. Data that has no context in space and time is not suited to STAC. Though providers of that data are welcome to 'borrow' STAC ideas and we could converge in the future on higher level specifications (like non-spatial or non-temporal 'items' or common catalog structures).
    
## What is the relationship between STAC and ISO 19115?
    
We are still figuring out the exact recommendation, but in general STAC is focused on search and discovery, while ISO 19115 aims to be the definitive metadata description. Likely one would derive a STAC Item from an ISO 19115 file by only using a subset of the fields, and mapping them to the matching STAC fields. And then the STAC Item would have an 'asset' link that lets users who need the full, definitive metadata to download the ISO 19115 file. Ideally we would have an ISO 19115 STAC Extension that details exactly how to do this mapping, but as yet no one has tried to do a real world implementation that exposes ISO 19115 files. Contributions on this front are definitely welcome, as STAC Community aims to 'play nice' with everyone.
    `,
};

module.exports = {
    hero,
    content,
};
