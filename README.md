# Trial
I took the liberty to approach the task from **two sides**:
**CLI** and **expressJs** APP
How to install:
 - create `.env` file or rename `.env.example` file
	 - in this file we stock all the **API** keys
 - run:
	 - `npm install`
	 - `npm run build`
	 
## CLI Mode
The script is running by default as CLI mode
	use `--wallet` as params
	Example:


      node ./dist/index.js --mode cli --wallet [address]    
      node ./dist/index.js --wallet [address]

## ExpressJS Mode
to use Expressjs mode simply add  `--mode server`
Optional params

    --port [3000]
    --host [127.0.0.1]
 Example:
  
    node ./dist/index.js --mode server --wallet [address]

