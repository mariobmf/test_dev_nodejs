import mongoose from 'mongoose';
import dbConfig from '../config/database';

mongoose.connect(dbConfig.url);

export default mongoose;