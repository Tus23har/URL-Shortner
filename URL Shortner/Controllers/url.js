const shortid = require('shortid');
const URL = require('../Models/url');
const { short } = require('webidl-conversions');
const express = require("express");

// express().use(express.json());


async function handleGenerateNewShortURL(req,res){
    const body = req.body;
    if( !body.url ) return res.status(400).json({ error : "URL is required."});
    const shortId = shortid();
    await URL.create({
        shortId : shortId,
        redirectUrl : body.url,
        visitHistory : [],
    });

    return res.json({id : shortId});
}


async function handleURLredirect(req,res){

    const shortId = req.params.shortId;
    // console.log(shortId);

    const entry = await URL.findOneAndUpdate({
        shortId 
    },
    {
        $push : {
            visitHistory : {
                timestamp : Date.now(),
            }
        }
    }
);

    // res.json(entry);
    res.redirect(`https://${entry.redirectUrl}`);
}


module.exports = {
    handleGenerateNewShortURL,
    handleURLredirect,
};