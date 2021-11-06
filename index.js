//import * as d3 from './web_modules/d3.js'
import 'https://cdnjs.cloudflare.com/ajax/libs/d3/7.0.0/d3.min.js'
//import {LineChart} from 'https://esm.archive.org/@d3/multi-line-chart'
import dayjs from 'https://esm.archive.org/dayjs'
import $ from 'https://esm.archive.org/jquery'

import LineChart from './multi-line-chart.js'

const date = dayjs().format('YYYY MM DD')

console.log('Hello World, Today is ', { date })

console.log(d3)
d3.select('.target').style('stroke-width', 8) // change their style: stroke width is not equal to 8 pixels
$('body').append('<div id="here"> im in here</div>')
$('#here').css('font-size', '18px').fadeOut('slow').fadeIn('slow')

async function marketData() {
    const params = {
        access_key: '76886bee2a933c7704e11dd678337575',
    }
   
   
    // fetch is async io
    // response is a promise, the await ensures the promise is resolved
    const response = await fetch(`http://api.marketstack.com/v1/eod?access_key=${params.access_key}&symbols=AAPL,CRM`)

    // there may be a lot of cycles spent converting json to something in memory, so use awai
    // apiResponse is a promise, await insures the promise is resolved.
    // you could move on without the await, and you'll get a promise, but then you need
    // to generate clever code that handles a promise that is not yet resolved
    const apiResponse = await response.json();

    // quotes are optional.  the keyname is a legal variable name
    // anonymous object
    // console.log({"apiResponse":apiResponse})
    console.log({apiResponse})
    /*
    if (Array.isArray(apiResponse['data'])) {
        apiResponse['data'].forEach(stockData => {
            console.log(`Ticker ${stockData['symbol']}`,
                `has a day high of ${stockData['high']},
                `on ${stockData['date']}`);
        });
    } */
    return apiResponse
}

const theGoodStuff = await marketData()
window.x = theGoodStuff

const unemployment = [
     {division: "Bethesda-Rockville-Frederick, MD Met Div", date: '2000-01-01', unemployment: 2.6},
     {division: "Bethesda-Rockville-Frederick, MD Met Div", date: '2000-02-01', unemployment: 2.6},
     {division: "Bethesda-Rockville-Frederick, MD Met Div", date: '2000-03-01', unemployment: 2.6},
     {division: "Bethesda-Rockville-Frederick, MD Met Div", date: '2000-04-01', unemployment: 2.6},
     {division: "Bethesda-Rockville-Frederick, MD Met Div", date: '2000-05-01', unemployment: 2.7},
     {division: "Bethesda-Rockville-Frederick, MD Met Div", date: '2000-06-01', unemployment: 2.7},
     {division: "Bethesda-Rockville-Frederick, MD Met Div", date: '2000-07-01', unemployment: 2.7},
     {division: "Bethesda-Rockville-Frederick, MD Met Div", date: '2000-08-01', unemployment: 2.6},
     {division: "Bethesda-Rockville-Frederick, MD Met Div", date: '2000-09-01', unemployment: 2.6},
     {division: "Bethesda-Rockville-Frederick, MD Met Div", date: '2000-10-01', unemployment: 2.6},
     {division: "Bethesda-Rockville-Frederick, MD Met Div", date: '2000-11-01', unemployment: 2.6},
     {division: "Bethesda-Rockville-Frederick, MD Met Div", date: '2000-12-01', unemployment: 2.6},
     {division: "Bethesda-Rockville-Frederick, MD Met Div", date: '2001-01-01', unemployment: 2.7},
     {division: "Bethesda-Rockville-Frederick, MD Met Div", date: '2001-02-01', unemployment: 2.7},
     {division: "Bethesda-Rockville-Frederick, MD Met Div", date: '2001-03-01', unemployment: 2.8},
]
const chart = LineChart(unemployment, {
    x: d => d.date,
    y: d => d.unemployment,
    z: d => d.division,
    yLabel: "↑ Unemployment (%)",
 //   width,
    height: 500,
    color: "steelblue",
   // voronoi // if true, show Voronoi overlay
  })
/*
const chart = LineChart(theGoodStuff.data.slice(0, 10), {
    
    x: d => String(d.date).slice(0, 10), //anonymous function that returns a date
    y: d => d.close,
    z: d => d.symbol,
    yLabel: "↑ Closing Price (tbd)",
   // width: 750,
    //height: 500,
    color: "steelblue",
    //voronoi // if true, show Voronoi overlay
  })
*/
  $('body').append(chart)
