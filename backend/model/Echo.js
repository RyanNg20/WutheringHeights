import mongoose from 'mongoose'
const { Schema, model } = mongoose

const echoSchema = new Schema({
  mainstat: {
    type: String,
    required: true,
  },
  mainstatVal: {
    type: Number,
    required: true,
  },
  substats: [{
    substat: String,
    value: Number
  }]
})

const Echo = model('Echo', echoSchema)
export default Echo