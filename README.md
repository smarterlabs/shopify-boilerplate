# SmarterLabs_ Shopify Boilerplate

## Setup

```
git clone git@github.com:smarterlabs/shopify-boilerplate.git --depth 1
rm -rf .git
git init
git add .
git commit -m 'Initial commit'
```

Create your Shopify store if you have not already done so.

Create a `.env` file in the root directory. Copy/paste in the contents of `.env.example` and fill in the blank credentials.

The Theme ID can be found in the theme preview URL, the store URL doesn't contain the protocol (example: smarter-labs.shopify.com), and the app password can be obtained by creating a secret app with read/write permissions to themes.