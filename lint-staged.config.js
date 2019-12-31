module.exports = {
  "src/**/*.{vue,js}": ["yarn lint", "git add ."],
  "src/**/*.{json,md,css,scss}": ["prettier --write", "git add ."]
};
