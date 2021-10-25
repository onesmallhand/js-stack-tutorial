//import * as d3 from './web_modules/d3.js'
import 'https://cdnjs.cloudflare.com/ajax/libs/d3/7.0.0/d3.min.js'
import dayjs from 'https://esm.archive.org/dayjs'
import $ from 'https://esm.archive.org/jquery'

const date = dayjs().format('YYYY MM DD')

console.log('Hello World, Today is ', { date })

console.log(d3)
d3.select('.target').style('stroke-width', 8) // change their style: stroke width is not equal to 8 pixels
$('body').append('<div id="here"> im in here</div>')
$('#here').css('font-size', '18px').fadeOut('slow').fadeIn('slow')