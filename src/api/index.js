'use strict';

const express = require('express');
const app = express();

export default function handler(req, res) {
    res.status(400).json({ hello: `world` })
}