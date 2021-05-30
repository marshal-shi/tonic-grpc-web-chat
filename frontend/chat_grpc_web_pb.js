/**
 * @fileoverview gRPC-Web generated client stub for chat
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.chat = require('./chat_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.chat.ChatReqClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.chat.ChatReqPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.Req,
 *   !proto.chat.Msg>}
 */
const methodDescriptor_ChatReq_ConnectServer = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/ConnectServer',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.chat.Req,
  proto.chat.Msg,
  /**
   * @param {!proto.chat.Req} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Msg.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.chat.Req,
 *   !proto.chat.Msg>}
 */
const methodInfo_ChatReq_ConnectServer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.chat.Msg,
  /**
   * @param {!proto.chat.Req} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Msg.deserializeBinary
);


/**
 * @param {!proto.chat.Req} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.chat.Msg>}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.connectServer =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/chat.ChatReq/ConnectServer',
      request,
      metadata || {},
      methodDescriptor_ChatReq_ConnectServer);
};


/**
 * @param {!proto.chat.Req} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.chat.Msg>}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqPromiseClient.prototype.connectServer =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/chat.ChatReq/ConnectServer',
      request,
      metadata || {},
      methodDescriptor_ChatReq_ConnectServer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.Msg,
 *   !proto.chat.Empty>}
 */
const methodDescriptor_ChatReq_SendMsg = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/SendMsg',
  grpc.web.MethodType.UNARY,
  proto.chat.Msg,
  proto.chat.Empty,
  /**
   * @param {!proto.chat.Msg} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.chat.Msg,
 *   !proto.chat.Empty>}
 */
const methodInfo_ChatReq_SendMsg = new grpc.web.AbstractClientBase.MethodInfo(
  proto.chat.Empty,
  /**
   * @param {!proto.chat.Msg} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Empty.deserializeBinary
);


/**
 * @param {!proto.chat.Msg} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.chat.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.sendMsg =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatReq/SendMsg',
      request,
      metadata || {},
      methodDescriptor_ChatReq_SendMsg,
      callback);
};


/**
 * @param {!proto.chat.Msg} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.Empty>}
 *     Promise that resolves to the response
 */
proto.chat.ChatReqPromiseClient.prototype.sendMsg =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatReq/SendMsg',
      request,
      metadata || {},
      methodDescriptor_ChatReq_SendMsg);
};


module.exports = proto.chat;

