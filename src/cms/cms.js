import CMS from 'netlify-cms';

// import uploadcare from 'netlify-cms-media-library-uploadcare';
// import cloudinary from 'netlify-cms-media-library-cloudinary';

// CMS.registerMediaLibrary(uploadcare);
// CMS.registerMediaLibrary(cloudinary);

// import ImageGalleryWidget from "./image-gallery-widget.js"
// import ImageGalleryPreview from "./image-gallery-preview.js"

CMS.registerPreviewTemplate('my-template', MyTemplate);
