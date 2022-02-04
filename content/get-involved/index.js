const hero = {
    "preheading": {
        "en": ""
    },
    "heading": {
        "en": "Get involved with STAC"
    },
    "body": {
        "en":
`Welcome! The STAC community prides itself on being welcoming and collaborative, and we are excited you clicked on this page to learn how you might help!

If you aren't sure where to begin, we encourage you to jump on our Gitter chat and introduce yourself. We can help match with a good project given your skills and time availability.`
    }
}

const howToHelp = {
    "heading": {
        "en": "How to help"
    },
    "body": {
        "en": `We list a number of general ideas below We are working on more resources to make it easier to plugin for data or software help – for now saying hi on gitter is a great place to begin.`
    }
}

const currentNeeds = {

}

const communityCalls = {
    "body": {
        "en" : `
### Community calls and working sessions

We also do video calls where we discuss various issues and move the spec forward. We alternate between hour long calls where we aim to talk through the issues in front of us, and 3 hour long 'working sessions' where people find some dedicated time to work on STAC, with others on the video call at the same time for any questions or collaboration. 

The other main locus of community activity is the [stac-spec repo](/). We also have a [stac-spec Google group](), where there are occasional messages.`
    }
}

module.exports = {
    hero,
    howToHelp,
    communityCalls,
    currentNeeds,
    developers: require('./developers'),
}