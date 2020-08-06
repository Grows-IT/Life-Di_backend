const { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } = require('date-fns');

var express = require('express');
const router = express.Router();

const colors = {
    green: {
        primary: '#4BB543',
        secondary: '#FAE3E3',
    },
    red: {
        primary: '#ff0000',
        secondary: '#D1E8FF',
    },
    black: {
        primary: '#001400',
        secondary: '#FDF1BA',
    }
}

// myEvent = [
//     {
//         start: 'August 3, 2020 00:00',
//         end: 'August 5, 2020 15:53',
//         title: 'วิ่งไล่ลุง',
//         color: colors.green,
//         actions: this.actions,
//         allDay: true,
//         resizable: {
//             beforeStart: true,
//             afterEnd: true,
//         },
//         draggable: true,
//     },
//     {
//         start: startOfDay(new Date()),
//         title: 'An event with no end date',
//         color: colors.yellow,
//         actions: this.actions,
//     },
//     {
//         start: subDays(endOfMonth(new Date()), 3),
//         end: addDays(endOfMonth(new Date()), 3),
//         title: 'A long event that spans 2 months',
//         color: colors.blue,
//         allDay: true,
//     },
//     {
//         start: addHours(startOfDay(new Date()), 2),
//         end: addHours(new Date(), 2),
//         title: 'A draggable and resizable event',
//         color: colors.yellow,
//         actions: this.actions,
//         resizable: {
//             beforeStart: true,
//             afterEnd: true,
//         },
//         draggable: true,
// },
// ];

router.route('/getActivity')
    .get((req, res) => {
        let myEvent = [{
            start: 'August 3, 2020 00:00',
            end: 'August 5, 2020 15:53',
            title: 'วิ่งไล่ลุง',
            color: colors.green,
            allDay: true,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
            draggable: false,
            price: 2800
        }, {
            // start: 'August 3, 2020 00:00',
            // end: 'August 5, 2020 15:53',
            start: subDays(startOfDay(new Date('August 1, 2020 09:00')), 1),
            end: addDays(new Date('August 12, 2020 15:00'), 1),
            title: 'วิ่งไล่ลุง ep2',
            color: colors.red,
            allDay: true,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
            draggable: false,
            price: 9000
        }, {
            // start: 'August 3, 2020 00:00',
            // end: 'August 5, 2020 15:53',
            start: subDays(startOfDay(new Date('September 9, 2020 09:00')), 1),
            end: addDays(new Date('September 12, 2020 15:00'), 1),
            title: 'วิ่งไล่ลุง ep3',
            color: colors.green,
            allDay: true,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
            draggable: false,
            price: 5000
        }, {
            // start: 'August 3, 2020 00:00',
            // end: 'August 5, 2020 15:53',
            start: subDays(startOfDay(new Date('September 20, 2020 09:00')), 1),
            end: addDays(new Date('September 12, 2020 15:00'), 1),
            title: 'วิ่งไล่ลุง ep4',
            color: colors.black,
            allDay: true,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
            draggable: false,
            price: 1500
        }]
        res.send(myEvent);
    })

module.exports = router;
