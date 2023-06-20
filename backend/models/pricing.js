const mongoose = require('mongoose')

const priceSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    driverprofit: {
        type: String,
        required: true
    },
    minfare: {
        type: String,
        required: true
    },
    distancebaseprice: {
        type: String,
    },
    baseprice: {
        type: String,
        required: true
    },
    ppudist: {
        type: String,
        required: true
    },
    pputime: {
        type: String,
        required: true
    },
    maxspace: {
        type: String,
        required: true
    },
})

const pricingModel = mongoose.model("pricingModel", priceSchema)


module.exports = pricingModel;





// const mongoose = require('mongoose')
// const Schema = mongoose.Schema

// const priceSchema = new mongoose.Schema({
//     country: {
//         type: Schema.Types.ObjectId,
//         required: true
//     },
//     city: {
//         type: Schema.Types.ObjectId,
//         required: true
//     },
//     service: {
//         type: Schema.Types.ObjectId,
//         required: true
//     },
//     driverprofit: {
//         type: String,
//         required: true
//     },
//     minfare: {
//         type: String,
//         required: true
//     },
//     distancebaseprice: {
//         type: String,
//     },
//     baseprice: {
//         type: String,
//         required: true
//     },
//     ppudist: {
//         type: String,
//         required: true
//     },
//     pputime: {
//         type: String,
//         required: true
//     },
//     maxspace: {
//         type: String,
//         required: true
//     },
// })

// const pricingModel = mongoose.model("pricingModel", priceSchema)


// module.exports = pricingModel;