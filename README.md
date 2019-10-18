# burger
> Eat-Da-Burger! Deployed at: https://calm-savannah-00376.herokuapp.com/

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
This is a deployed app that lets users "Eat" burgers. When "eaten" the burger moves to the right column. You can move it back by "Remaking" it. You can also add a new burger.

## Technologies
* MySQL
* JavaScript
* handlebars

## Setup
Visit https://calm-savannah-00376.herokuapp.com/

## Code Examples
    router.post("/api/burgers", function(req, res) {
        burger.insertOne([
            "burger_name"
        ], [
            req.body.name
        ], function(result) {
            res.json({ id: result.insertId });
        });

## Features
List of features ready and TODOs for future development
* Chose to eat a pre-filled burger.
* Chose to remake a burger you have already eaten.
* Create your own burger to eat.

## Status
Project is: _finished_

## Inspiration
Based on a homework assignment for The Coding Bootcamp at UT Austin

## Contact
Created by Elise Hammons - feel free to contact me!
<br>LinkedIn: https://www.linkedin.com/in/elise-h-01243258/