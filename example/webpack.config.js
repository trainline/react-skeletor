module.exports = {
 entry: './src/index.ts',
 output: {
   filename: 'bundle.js',
   path: `./public/`
 },
 module: {
   rules: [
     {
       test: /\.tsx?$/,
       loader: 'ts-loader',
       exclude: /node_modules/,
     },
   ]
 },
 resolve: {
   extensions: [".tsx", ".ts", ".js"]
 },
};