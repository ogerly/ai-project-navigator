import mongoose from 'mongoose';

const TestSchema = new mongoose.Schema({
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const TestModel = mongoose.model('Test', TestSchema);
export default TestModel;
