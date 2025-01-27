import path from 'path';
import webpack from 'webpack';
import dotenv from 'dotenv';
import TerserPlugin from 'terser-webpack-plugin'; // For minification

// Load environment variables from .env file
dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  entry: './src/index.js',
  target: 'node',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@routes': path.resolve(process.cwd(), 'src/routes'),
      '../../controllers': path.resolve(process.cwd(), 'src/controllers'),
      '../models': path.resolve(process.cwd(), 'src/models'),
      '../../middlewares': path.resolve(process.cwd(), 'src/middlewares'),
      '@utils': path.resolve(process.cwd(), 'src/utils'),
      '@public': path.resolve(process.cwd(), 'public'),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env), // Expose all environment variables
    }),
  ],
  optimization: {
    minimize: isProduction, // Enable minimization if in production
    minimizer: [new TerserPlugin()],
  },
  mode: isProduction ? 'production' : 'development',
};

export default config; // Export the configuration
