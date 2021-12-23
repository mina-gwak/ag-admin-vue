import * as AWS from 'aws-sdk';

function updateAWS() {
  AWS.config.update({
    region: 'ap-northeast-2',
    accessKeyId: process.env.VUE_APP_ACCESS_KEY_ID,
    secretAccessKey: process.env.VUE_APP_SECRET_ACCESS_KEY,
  });
}

function getPromise(event) {
  const imageFile = event.target.files[0];
  if (!imageFile) return;
  
  return new AWS.S3.ManagedUpload({
    params: {
      Bucket: 'ag-admin-image',
      Key: imageFile.name,
      Body: imageFile,
    },
  }).promise();
}

function uploadImage(event, info) {
  
  updateAWS();
  const upload = getPromise(event);
  const property = event.target.id;
  
  return upload.then(
    function(data) {
      return {
        ...info,
        [property]: data.Location,
      };
    },
    function(error) {
      console.log(error);
    },
  );
}

export { uploadImage };