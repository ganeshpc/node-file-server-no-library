# node-file-server-no-library

This is simple file server created using node. The idea is to do it with basic http package provided by the node. Without the use of libraries such as express.

#### Server Capabilities
* Download File
* Check if a file is present on the server
* Upload file (For now implemented through busboy)

#### In progress
* Upload File (bus boy parses the incoming request body and separates headers and file data from the form-data request body. It will emit chunks of the file data from req body as them come)
* Next step is to replace the busboy library with the own code.


#### Development

##### On your machine
* `npm install`
* Update .env file for file storage location
* `npm run start`
* open: http://localhsot:8000

##### Through Docker
* `cd` to project directory
* Build docker image -> `docker build -t your-image-name .`
* Run docker container -> `docker run -p 8000:8000 -v /file/storage-path/on/your/machine:/path/provided/in/env your-image-name`
* open: http://localhsot:8000

#### References

For basic routing take a look at: https://github.com/alberto-bottarini/httpdispatcher

For more sophisticated and robust routing and request handling: https://github.com/expressjs/express

For form-data handling: https://github.com/mscdex/busboy