"use strict";
class OssQuery {
    toJSON() {
        return {
            'prefix': this.prefix,
            'marker': this.marker,
            'delimiter': this.delimiter,
            'max-keys': this.maxKeys
        };
    }
}
exports.OssQuery = OssQuery;
class OssSignatureUrlOptionsResponse {
    toJSON() {
        return {
            'content-type': this.contentType,
            'content-disposition': this.contentDisposition,
            'cache-control': this.cacheControl
        };
    }
}
exports.OssSignatureUrlOptionsResponse = OssSignatureUrlOptionsResponse;

//# sourceMappingURL=ossfile.js.map
