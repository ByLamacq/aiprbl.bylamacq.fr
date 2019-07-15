(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'aipr'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'aipr'.");
    }
    root.aipr = factory(typeof aipr === 'undefined' ? {} : aipr, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var L_1 = Kotlin.Long.NEG_ONE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var substringAfterLast = Kotlin.kotlin.text.substringAfterLast_8cymmc$;
  var equals = Kotlin.equals;
  var substringBeforeLast = Kotlin.kotlin.text.substringBeforeLast_8cymmc$;
  var Unit = Kotlin.kotlin.Unit;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var throwCCE = Kotlin.throwCCE;
  var asList = Kotlin.org.w3c.dom.asList_kt9thq$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var last = Kotlin.kotlin.collections.last_us0mfu$;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var isNaN_0 = Kotlin.kotlin.isNaN_yrwdxr$;
  var substringBefore = Kotlin.kotlin.text.substringBefore_j4ogox$;
  var isWhitespace = Kotlin.kotlin.text.isWhitespace_myv2d0$;
  var last_0 = Kotlin.kotlin.collections.last_2p1efm$;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  function hello() {
    return 'Hello from JS';
  }
  var XmlToPdfStructure;
  var XmlToPdfDt;
  function AcroFormField(name, value) {
    this.name = name;
    this.value = value;
  }
  AcroFormField.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AcroFormField',
    interfaces: []
  };
  AcroFormField.prototype.component1 = function () {
    return this.name;
  };
  AcroFormField.prototype.component2 = function () {
    return this.value;
  };
  AcroFormField.prototype.copy_puj7f4$ = function (name, value) {
    return new AcroFormField(name === void 0 ? this.name : name, value === void 0 ? this.value : value);
  };
  AcroFormField.prototype.toString = function () {
    return 'AcroFormField(name=' + Kotlin.toString(this.name) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  AcroFormField.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  AcroFormField.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.value, other.value)))));
  };
  function Dt(id, number, creationDate, geographiqueProjection, geographiqueCoordonates, natureWork, startDate, duration, structureIds, projectId) {
    this.id = id;
    this.number = number;
    this.creationDate = creationDate;
    this.geographiqueProjection = geographiqueProjection;
    this.geographiqueCoordonates = geographiqueCoordonates;
    this.natureWork = natureWork;
    this.startDate = startDate;
    this.duration = duration;
    this.structureIds = structureIds;
    this.projectId = projectId;
  }
  Dt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Dt',
    interfaces: []
  };
  Dt.prototype.component1 = function () {
    return this.id;
  };
  Dt.prototype.component2 = function () {
    return this.number;
  };
  Dt.prototype.component3 = function () {
    return this.creationDate;
  };
  Dt.prototype.component4 = function () {
    return this.geographiqueProjection;
  };
  Dt.prototype.component5 = function () {
    return this.geographiqueCoordonates;
  };
  Dt.prototype.component6 = function () {
    return this.natureWork;
  };
  Dt.prototype.component7 = function () {
    return this.startDate;
  };
  Dt.prototype.component8 = function () {
    return this.duration;
  };
  Dt.prototype.component9 = function () {
    return this.structureIds;
  };
  Dt.prototype.component10 = function () {
    return this.projectId;
  };
  Dt.prototype.copy_wzikx7$ = function (id, number, creationDate, geographiqueProjection, geographiqueCoordonates, natureWork, startDate, duration, structureIds, projectId) {
    return new Dt(id === void 0 ? this.id : id, number === void 0 ? this.number : number, creationDate === void 0 ? this.creationDate : creationDate, geographiqueProjection === void 0 ? this.geographiqueProjection : geographiqueProjection, geographiqueCoordonates === void 0 ? this.geographiqueCoordonates : geographiqueCoordonates, natureWork === void 0 ? this.natureWork : natureWork, startDate === void 0 ? this.startDate : startDate, duration === void 0 ? this.duration : duration, structureIds === void 0 ? this.structureIds : structureIds, projectId === void 0 ? this.projectId : projectId);
  };
  Dt.prototype.toString = function () {
    return 'Dt(id=' + Kotlin.toString(this.id) + (', number=' + Kotlin.toString(this.number)) + (', creationDate=' + Kotlin.toString(this.creationDate)) + (', geographiqueProjection=' + Kotlin.toString(this.geographiqueProjection)) + (', geographiqueCoordonates=' + Kotlin.toString(this.geographiqueCoordonates)) + (', natureWork=' + Kotlin.toString(this.natureWork)) + (', startDate=' + Kotlin.toString(this.startDate)) + (', duration=' + Kotlin.toString(this.duration)) + (', structureIds=' + Kotlin.toString(this.structureIds)) + (', projectId=' + Kotlin.toString(this.projectId)) + ')';
  };
  Dt.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.number) | 0;
    result = result * 31 + Kotlin.hashCode(this.creationDate) | 0;
    result = result * 31 + Kotlin.hashCode(this.geographiqueProjection) | 0;
    result = result * 31 + Kotlin.hashCode(this.geographiqueCoordonates) | 0;
    result = result * 31 + Kotlin.hashCode(this.natureWork) | 0;
    result = result * 31 + Kotlin.hashCode(this.startDate) | 0;
    result = result * 31 + Kotlin.hashCode(this.duration) | 0;
    result = result * 31 + Kotlin.hashCode(this.structureIds) | 0;
    result = result * 31 + Kotlin.hashCode(this.projectId) | 0;
    return result;
  };
  Dt.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.number, other.number) && Kotlin.equals(this.creationDate, other.creationDate) && Kotlin.equals(this.geographiqueProjection, other.geographiqueProjection) && Kotlin.equals(this.geographiqueCoordonates, other.geographiqueCoordonates) && Kotlin.equals(this.natureWork, other.natureWork) && Kotlin.equals(this.startDate, other.startDate) && Kotlin.equals(this.duration, other.duration) && Kotlin.equals(this.structureIds, other.structureIds) && Kotlin.equals(this.projectId, other.projectId)))));
  };
  function File_0(id, name, consultationType, consultationNumber, registred) {
    this.id = id;
    this.name = name;
    this.consultationType = consultationType;
    this.consultationNumber = consultationNumber;
    this.registred = registred;
  }
  File_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'File',
    interfaces: []
  };
  File_0.prototype.component1 = function () {
    return this.id;
  };
  File_0.prototype.component2 = function () {
    return this.name;
  };
  File_0.prototype.component3 = function () {
    return this.consultationType;
  };
  File_0.prototype.component4 = function () {
    return this.consultationNumber;
  };
  File_0.prototype.component5 = function () {
    return this.registred;
  };
  File_0.prototype.copy_tf56rs$ = function (id, name, consultationType, consultationNumber, registred) {
    return new File_0(id === void 0 ? this.id : id, name === void 0 ? this.name : name, consultationType === void 0 ? this.consultationType : consultationType, consultationNumber === void 0 ? this.consultationNumber : consultationNumber, registred === void 0 ? this.registred : registred);
  };
  File_0.prototype.toString = function () {
    return 'File(id=' + Kotlin.toString(this.id) + (', name=' + Kotlin.toString(this.name)) + (', consultationType=' + Kotlin.toString(this.consultationType)) + (', consultationNumber=' + Kotlin.toString(this.consultationNumber)) + (', registred=' + Kotlin.toString(this.registred)) + ')';
  };
  File_0.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.consultationType) | 0;
    result = result * 31 + Kotlin.hashCode(this.consultationNumber) | 0;
    result = result * 31 + Kotlin.hashCode(this.registred) | 0;
    return result;
  };
  File_0.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.consultationType, other.consultationType) && Kotlin.equals(this.consultationNumber, other.consultationNumber) && Kotlin.equals(this.registred, other.registred)))));
  };
  function PrimeContractor(id, name, service, address, postalCode, city, manager, phone, mobile, email) {
    this.id = id;
    this.name = name;
    this.service = service;
    this.address = address;
    this.postalCode = postalCode;
    this.city = city;
    this.manager = manager;
    this.phone = phone;
    this.mobile = mobile;
    this.email = email;
  }
  PrimeContractor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PrimeContractor',
    interfaces: []
  };
  PrimeContractor.prototype.component1 = function () {
    return this.id;
  };
  PrimeContractor.prototype.component2 = function () {
    return this.name;
  };
  PrimeContractor.prototype.component3 = function () {
    return this.service;
  };
  PrimeContractor.prototype.component4 = function () {
    return this.address;
  };
  PrimeContractor.prototype.component5 = function () {
    return this.postalCode;
  };
  PrimeContractor.prototype.component6 = function () {
    return this.city;
  };
  PrimeContractor.prototype.component7 = function () {
    return this.manager;
  };
  PrimeContractor.prototype.component8 = function () {
    return this.phone;
  };
  PrimeContractor.prototype.component9 = function () {
    return this.mobile;
  };
  PrimeContractor.prototype.component10 = function () {
    return this.email;
  };
  PrimeContractor.prototype.copy_t8vjp$ = function (id, name, service, address, postalCode, city, manager, phone, mobile, email) {
    return new PrimeContractor(id === void 0 ? this.id : id, name === void 0 ? this.name : name, service === void 0 ? this.service : service, address === void 0 ? this.address : address, postalCode === void 0 ? this.postalCode : postalCode, city === void 0 ? this.city : city, manager === void 0 ? this.manager : manager, phone === void 0 ? this.phone : phone, mobile === void 0 ? this.mobile : mobile, email === void 0 ? this.email : email);
  };
  PrimeContractor.prototype.toString = function () {
    return 'PrimeContractor(id=' + Kotlin.toString(this.id) + (', name=' + Kotlin.toString(this.name)) + (', service=' + Kotlin.toString(this.service)) + (', address=' + Kotlin.toString(this.address)) + (', postalCode=' + Kotlin.toString(this.postalCode)) + (', city=' + Kotlin.toString(this.city)) + (', manager=' + Kotlin.toString(this.manager)) + (', phone=' + Kotlin.toString(this.phone)) + (', mobile=' + Kotlin.toString(this.mobile)) + (', email=' + Kotlin.toString(this.email)) + ')';
  };
  PrimeContractor.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.service) | 0;
    result = result * 31 + Kotlin.hashCode(this.address) | 0;
    result = result * 31 + Kotlin.hashCode(this.postalCode) | 0;
    result = result * 31 + Kotlin.hashCode(this.city) | 0;
    result = result * 31 + Kotlin.hashCode(this.manager) | 0;
    result = result * 31 + Kotlin.hashCode(this.phone) | 0;
    result = result * 31 + Kotlin.hashCode(this.mobile) | 0;
    result = result * 31 + Kotlin.hashCode(this.email) | 0;
    return result;
  };
  PrimeContractor.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.service, other.service) && Kotlin.equals(this.address, other.address) && Kotlin.equals(this.postalCode, other.postalCode) && Kotlin.equals(this.city, other.city) && Kotlin.equals(this.manager, other.manager) && Kotlin.equals(this.phone, other.phone) && Kotlin.equals(this.mobile, other.mobile) && Kotlin.equals(this.email, other.email)))));
  };
  function Project(id, name, projectNumber, address, postalCode, city, description, projectOwnerId, projectManagerId, primeContractorId) {
    if (projectOwnerId === void 0)
      projectOwnerId = L_1;
    if (projectManagerId === void 0)
      projectManagerId = L_1;
    if (primeContractorId === void 0)
      primeContractorId = L_1;
    this.id = id;
    this.name = name;
    this.projectNumber = projectNumber;
    this.address = address;
    this.postalCode = postalCode;
    this.city = city;
    this.description = description;
    this.projectOwnerId = projectOwnerId;
    this.projectManagerId = projectManagerId;
    this.primeContractorId = primeContractorId;
  }
  Project.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Project',
    interfaces: []
  };
  Project.prototype.component1 = function () {
    return this.id;
  };
  Project.prototype.component2 = function () {
    return this.name;
  };
  Project.prototype.component3 = function () {
    return this.projectNumber;
  };
  Project.prototype.component4 = function () {
    return this.address;
  };
  Project.prototype.component5 = function () {
    return this.postalCode;
  };
  Project.prototype.component6 = function () {
    return this.city;
  };
  Project.prototype.component7 = function () {
    return this.description;
  };
  Project.prototype.component8 = function () {
    return this.projectOwnerId;
  };
  Project.prototype.component9 = function () {
    return this.projectManagerId;
  };
  Project.prototype.component10 = function () {
    return this.primeContractorId;
  };
  Project.prototype.copy_z9kkcs$ = function (id, name, projectNumber, address, postalCode, city, description, projectOwnerId, projectManagerId, primeContractorId) {
    return new Project(id === void 0 ? this.id : id, name === void 0 ? this.name : name, projectNumber === void 0 ? this.projectNumber : projectNumber, address === void 0 ? this.address : address, postalCode === void 0 ? this.postalCode : postalCode, city === void 0 ? this.city : city, description === void 0 ? this.description : description, projectOwnerId === void 0 ? this.projectOwnerId : projectOwnerId, projectManagerId === void 0 ? this.projectManagerId : projectManagerId, primeContractorId === void 0 ? this.primeContractorId : primeContractorId);
  };
  Project.prototype.toString = function () {
    return 'Project(id=' + Kotlin.toString(this.id) + (', name=' + Kotlin.toString(this.name)) + (', projectNumber=' + Kotlin.toString(this.projectNumber)) + (', address=' + Kotlin.toString(this.address)) + (', postalCode=' + Kotlin.toString(this.postalCode)) + (', city=' + Kotlin.toString(this.city)) + (', description=' + Kotlin.toString(this.description)) + (', projectOwnerId=' + Kotlin.toString(this.projectOwnerId)) + (', projectManagerId=' + Kotlin.toString(this.projectManagerId)) + (', primeContractorId=' + Kotlin.toString(this.primeContractorId)) + ')';
  };
  Project.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.projectNumber) | 0;
    result = result * 31 + Kotlin.hashCode(this.address) | 0;
    result = result * 31 + Kotlin.hashCode(this.postalCode) | 0;
    result = result * 31 + Kotlin.hashCode(this.city) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.projectOwnerId) | 0;
    result = result * 31 + Kotlin.hashCode(this.projectManagerId) | 0;
    result = result * 31 + Kotlin.hashCode(this.primeContractorId) | 0;
    return result;
  };
  Project.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.projectNumber, other.projectNumber) && Kotlin.equals(this.address, other.address) && Kotlin.equals(this.postalCode, other.postalCode) && Kotlin.equals(this.city, other.city) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.projectOwnerId, other.projectOwnerId) && Kotlin.equals(this.projectManagerId, other.projectManagerId) && Kotlin.equals(this.primeContractorId, other.primeContractorId)))));
  };
  function ProjectManager(id, name, service, address, postalCode, city, manager, phone, mobile, email) {
    this.id = id;
    this.name = name;
    this.service = service;
    this.address = address;
    this.postalCode = postalCode;
    this.city = city;
    this.manager = manager;
    this.phone = phone;
    this.mobile = mobile;
    this.email = email;
  }
  ProjectManager.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProjectManager',
    interfaces: []
  };
  ProjectManager.prototype.component1 = function () {
    return this.id;
  };
  ProjectManager.prototype.component2 = function () {
    return this.name;
  };
  ProjectManager.prototype.component3 = function () {
    return this.service;
  };
  ProjectManager.prototype.component4 = function () {
    return this.address;
  };
  ProjectManager.prototype.component5 = function () {
    return this.postalCode;
  };
  ProjectManager.prototype.component6 = function () {
    return this.city;
  };
  ProjectManager.prototype.component7 = function () {
    return this.manager;
  };
  ProjectManager.prototype.component8 = function () {
    return this.phone;
  };
  ProjectManager.prototype.component9 = function () {
    return this.mobile;
  };
  ProjectManager.prototype.component10 = function () {
    return this.email;
  };
  ProjectManager.prototype.copy_t8vjp$ = function (id, name, service, address, postalCode, city, manager, phone, mobile, email) {
    return new ProjectManager(id === void 0 ? this.id : id, name === void 0 ? this.name : name, service === void 0 ? this.service : service, address === void 0 ? this.address : address, postalCode === void 0 ? this.postalCode : postalCode, city === void 0 ? this.city : city, manager === void 0 ? this.manager : manager, phone === void 0 ? this.phone : phone, mobile === void 0 ? this.mobile : mobile, email === void 0 ? this.email : email);
  };
  ProjectManager.prototype.toString = function () {
    return 'ProjectManager(id=' + Kotlin.toString(this.id) + (', name=' + Kotlin.toString(this.name)) + (', service=' + Kotlin.toString(this.service)) + (', address=' + Kotlin.toString(this.address)) + (', postalCode=' + Kotlin.toString(this.postalCode)) + (', city=' + Kotlin.toString(this.city)) + (', manager=' + Kotlin.toString(this.manager)) + (', phone=' + Kotlin.toString(this.phone)) + (', mobile=' + Kotlin.toString(this.mobile)) + (', email=' + Kotlin.toString(this.email)) + ')';
  };
  ProjectManager.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.service) | 0;
    result = result * 31 + Kotlin.hashCode(this.address) | 0;
    result = result * 31 + Kotlin.hashCode(this.postalCode) | 0;
    result = result * 31 + Kotlin.hashCode(this.city) | 0;
    result = result * 31 + Kotlin.hashCode(this.manager) | 0;
    result = result * 31 + Kotlin.hashCode(this.phone) | 0;
    result = result * 31 + Kotlin.hashCode(this.mobile) | 0;
    result = result * 31 + Kotlin.hashCode(this.email) | 0;
    return result;
  };
  ProjectManager.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.service, other.service) && Kotlin.equals(this.address, other.address) && Kotlin.equals(this.postalCode, other.postalCode) && Kotlin.equals(this.city, other.city) && Kotlin.equals(this.manager, other.manager) && Kotlin.equals(this.phone, other.phone) && Kotlin.equals(this.mobile, other.mobile) && Kotlin.equals(this.email, other.email)))));
  };
  function ProjectOwner(id, entity, name, service, address, postalCode, city, phone, country) {
    this.id = id;
    this.entity = entity;
    this.name = name;
    this.service = service;
    this.address = address;
    this.postalCode = postalCode;
    this.city = city;
    this.phone = phone;
    this.country = country;
  }
  ProjectOwner.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProjectOwner',
    interfaces: []
  };
  ProjectOwner.prototype.component1 = function () {
    return this.id;
  };
  ProjectOwner.prototype.component2 = function () {
    return this.entity;
  };
  ProjectOwner.prototype.component3 = function () {
    return this.name;
  };
  ProjectOwner.prototype.component4 = function () {
    return this.service;
  };
  ProjectOwner.prototype.component5 = function () {
    return this.address;
  };
  ProjectOwner.prototype.component6 = function () {
    return this.postalCode;
  };
  ProjectOwner.prototype.component7 = function () {
    return this.city;
  };
  ProjectOwner.prototype.component8 = function () {
    return this.phone;
  };
  ProjectOwner.prototype.component9 = function () {
    return this.country;
  };
  ProjectOwner.prototype.copy_dxj9ix$ = function (id, entity, name, service, address, postalCode, city, phone, country) {
    return new ProjectOwner(id === void 0 ? this.id : id, entity === void 0 ? this.entity : entity, name === void 0 ? this.name : name, service === void 0 ? this.service : service, address === void 0 ? this.address : address, postalCode === void 0 ? this.postalCode : postalCode, city === void 0 ? this.city : city, phone === void 0 ? this.phone : phone, country === void 0 ? this.country : country);
  };
  ProjectOwner.prototype.toString = function () {
    return 'ProjectOwner(id=' + Kotlin.toString(this.id) + (', entity=' + Kotlin.toString(this.entity)) + (', name=' + Kotlin.toString(this.name)) + (', service=' + Kotlin.toString(this.service)) + (', address=' + Kotlin.toString(this.address)) + (', postalCode=' + Kotlin.toString(this.postalCode)) + (', city=' + Kotlin.toString(this.city)) + (', phone=' + Kotlin.toString(this.phone)) + (', country=' + Kotlin.toString(this.country)) + ')';
  };
  ProjectOwner.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.entity) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.service) | 0;
    result = result * 31 + Kotlin.hashCode(this.address) | 0;
    result = result * 31 + Kotlin.hashCode(this.postalCode) | 0;
    result = result * 31 + Kotlin.hashCode(this.city) | 0;
    result = result * 31 + Kotlin.hashCode(this.phone) | 0;
    result = result * 31 + Kotlin.hashCode(this.country) | 0;
    return result;
  };
  ProjectOwner.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.entity, other.entity) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.service, other.service) && Kotlin.equals(this.address, other.address) && Kotlin.equals(this.postalCode, other.postalCode) && Kotlin.equals(this.city, other.city) && Kotlin.equals(this.phone, other.phone) && Kotlin.equals(this.country, other.country)))));
  };
  function Structure(id, structureContact, structureCategorie, structureClass, structureCode, status, creationDate) {
    this.id = id;
    this.structureContact = structureContact;
    this.structureCategorie = structureCategorie;
    this.structureClass = structureClass;
    this.structureCode = structureCode;
    this.status = status;
    this.creationDate = creationDate;
  }
  Structure.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Structure',
    interfaces: []
  };
  Structure.prototype.component1 = function () {
    return this.id;
  };
  Structure.prototype.component2 = function () {
    return this.structureContact;
  };
  Structure.prototype.component3 = function () {
    return this.structureCategorie;
  };
  Structure.prototype.component4 = function () {
    return this.structureClass;
  };
  Structure.prototype.component5 = function () {
    return this.structureCode;
  };
  Structure.prototype.component6 = function () {
    return this.status;
  };
  Structure.prototype.component7 = function () {
    return this.creationDate;
  };
  Structure.prototype.copy_kcp4rg$ = function (id, structureContact, structureCategorie, structureClass, structureCode, status, creationDate) {
    return new Structure(id === void 0 ? this.id : id, structureContact === void 0 ? this.structureContact : structureContact, structureCategorie === void 0 ? this.structureCategorie : structureCategorie, structureClass === void 0 ? this.structureClass : structureClass, structureCode === void 0 ? this.structureCode : structureCode, status === void 0 ? this.status : status, creationDate === void 0 ? this.creationDate : creationDate);
  };
  Structure.prototype.toString = function () {
    return 'Structure(id=' + Kotlin.toString(this.id) + (', structureContact=' + Kotlin.toString(this.structureContact)) + (', structureCategorie=' + Kotlin.toString(this.structureCategorie)) + (', structureClass=' + Kotlin.toString(this.structureClass)) + (', structureCode=' + Kotlin.toString(this.structureCode)) + (', status=' + Kotlin.toString(this.status)) + (', creationDate=' + Kotlin.toString(this.creationDate)) + ')';
  };
  Structure.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.structureContact) | 0;
    result = result * 31 + Kotlin.hashCode(this.structureCategorie) | 0;
    result = result * 31 + Kotlin.hashCode(this.structureClass) | 0;
    result = result * 31 + Kotlin.hashCode(this.structureCode) | 0;
    result = result * 31 + Kotlin.hashCode(this.status) | 0;
    result = result * 31 + Kotlin.hashCode(this.creationDate) | 0;
    return result;
  };
  Structure.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.structureContact, other.structureContact) && Kotlin.equals(this.structureCategorie, other.structureCategorie) && Kotlin.equals(this.structureClass, other.structureClass) && Kotlin.equals(this.structureCode, other.structureCode) && Kotlin.equals(this.status, other.status) && Kotlin.equals(this.creationDate, other.creationDate)))));
  };
  function StructureContact(society, agence, complement, number, road, placeCalled, postalCode, city, countryCode, fax, email, phone, emergencyPhone, emergencyFax, emergencyEmail, damagePhone, website, emergencySet) {
    this.society = society;
    this.agence = agence;
    this.complement = complement;
    this.number = number;
    this.road = road;
    this.placeCalled = placeCalled;
    this.postalCode = postalCode;
    this.city = city;
    this.countryCode = countryCode;
    this.fax = fax;
    this.email = email;
    this.phone = phone;
    this.emergencyPhone = emergencyPhone;
    this.emergencyFax = emergencyFax;
    this.emergencyEmail = emergencyEmail;
    this.damagePhone = damagePhone;
    this.website = website;
    this.emergencySet = emergencySet;
  }
  StructureContact.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StructureContact',
    interfaces: []
  };
  StructureContact.prototype.component1 = function () {
    return this.society;
  };
  StructureContact.prototype.component2 = function () {
    return this.agence;
  };
  StructureContact.prototype.component3 = function () {
    return this.complement;
  };
  StructureContact.prototype.component4 = function () {
    return this.number;
  };
  StructureContact.prototype.component5 = function () {
    return this.road;
  };
  StructureContact.prototype.component6 = function () {
    return this.placeCalled;
  };
  StructureContact.prototype.component7 = function () {
    return this.postalCode;
  };
  StructureContact.prototype.component8 = function () {
    return this.city;
  };
  StructureContact.prototype.component9 = function () {
    return this.countryCode;
  };
  StructureContact.prototype.component10 = function () {
    return this.fax;
  };
  StructureContact.prototype.component11 = function () {
    return this.email;
  };
  StructureContact.prototype.component12 = function () {
    return this.phone;
  };
  StructureContact.prototype.component13 = function () {
    return this.emergencyPhone;
  };
  StructureContact.prototype.component14 = function () {
    return this.emergencyFax;
  };
  StructureContact.prototype.component15 = function () {
    return this.emergencyEmail;
  };
  StructureContact.prototype.component16 = function () {
    return this.damagePhone;
  };
  StructureContact.prototype.component17 = function () {
    return this.website;
  };
  StructureContact.prototype.component18 = function () {
    return this.emergencySet;
  };
  StructureContact.prototype.copy_qqmb9s$ = function (society, agence, complement, number, road, placeCalled, postalCode, city, countryCode, fax, email, phone, emergencyPhone, emergencyFax, emergencyEmail, damagePhone, website, emergencySet) {
    return new StructureContact(society === void 0 ? this.society : society, agence === void 0 ? this.agence : agence, complement === void 0 ? this.complement : complement, number === void 0 ? this.number : number, road === void 0 ? this.road : road, placeCalled === void 0 ? this.placeCalled : placeCalled, postalCode === void 0 ? this.postalCode : postalCode, city === void 0 ? this.city : city, countryCode === void 0 ? this.countryCode : countryCode, fax === void 0 ? this.fax : fax, email === void 0 ? this.email : email, phone === void 0 ? this.phone : phone, emergencyPhone === void 0 ? this.emergencyPhone : emergencyPhone, emergencyFax === void 0 ? this.emergencyFax : emergencyFax, emergencyEmail === void 0 ? this.emergencyEmail : emergencyEmail, damagePhone === void 0 ? this.damagePhone : damagePhone, website === void 0 ? this.website : website, emergencySet === void 0 ? this.emergencySet : emergencySet);
  };
  StructureContact.prototype.toString = function () {
    return 'StructureContact(society=' + Kotlin.toString(this.society) + (', agence=' + Kotlin.toString(this.agence)) + (', complement=' + Kotlin.toString(this.complement)) + (', number=' + Kotlin.toString(this.number)) + (', road=' + Kotlin.toString(this.road)) + (', placeCalled=' + Kotlin.toString(this.placeCalled)) + (', postalCode=' + Kotlin.toString(this.postalCode)) + (', city=' + Kotlin.toString(this.city)) + (', countryCode=' + Kotlin.toString(this.countryCode)) + (', fax=' + Kotlin.toString(this.fax)) + (', email=' + Kotlin.toString(this.email)) + (', phone=' + Kotlin.toString(this.phone)) + (', emergencyPhone=' + Kotlin.toString(this.emergencyPhone)) + (', emergencyFax=' + Kotlin.toString(this.emergencyFax)) + (', emergencyEmail=' + Kotlin.toString(this.emergencyEmail)) + (', damagePhone=' + Kotlin.toString(this.damagePhone)) + (', website=' + Kotlin.toString(this.website)) + (', emergencySet=' + Kotlin.toString(this.emergencySet)) + ')';
  };
  StructureContact.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.society) | 0;
    result = result * 31 + Kotlin.hashCode(this.agence) | 0;
    result = result * 31 + Kotlin.hashCode(this.complement) | 0;
    result = result * 31 + Kotlin.hashCode(this.number) | 0;
    result = result * 31 + Kotlin.hashCode(this.road) | 0;
    result = result * 31 + Kotlin.hashCode(this.placeCalled) | 0;
    result = result * 31 + Kotlin.hashCode(this.postalCode) | 0;
    result = result * 31 + Kotlin.hashCode(this.city) | 0;
    result = result * 31 + Kotlin.hashCode(this.countryCode) | 0;
    result = result * 31 + Kotlin.hashCode(this.fax) | 0;
    result = result * 31 + Kotlin.hashCode(this.email) | 0;
    result = result * 31 + Kotlin.hashCode(this.phone) | 0;
    result = result * 31 + Kotlin.hashCode(this.emergencyPhone) | 0;
    result = result * 31 + Kotlin.hashCode(this.emergencyFax) | 0;
    result = result * 31 + Kotlin.hashCode(this.emergencyEmail) | 0;
    result = result * 31 + Kotlin.hashCode(this.damagePhone) | 0;
    result = result * 31 + Kotlin.hashCode(this.website) | 0;
    result = result * 31 + Kotlin.hashCode(this.emergencySet) | 0;
    return result;
  };
  StructureContact.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.society, other.society) && Kotlin.equals(this.agence, other.agence) && Kotlin.equals(this.complement, other.complement) && Kotlin.equals(this.number, other.number) && Kotlin.equals(this.road, other.road) && Kotlin.equals(this.placeCalled, other.placeCalled) && Kotlin.equals(this.postalCode, other.postalCode) && Kotlin.equals(this.city, other.city) && Kotlin.equals(this.countryCode, other.countryCode) && Kotlin.equals(this.fax, other.fax) && Kotlin.equals(this.email, other.email) && Kotlin.equals(this.phone, other.phone) && Kotlin.equals(this.emergencyPhone, other.emergencyPhone) && Kotlin.equals(this.emergencyFax, other.emergencyFax) && Kotlin.equals(this.emergencyEmail, other.emergencyEmail) && Kotlin.equals(this.damagePhone, other.damagePhone) && Kotlin.equals(this.website, other.website) && Kotlin.equals(this.emergencySet, other.emergencySet)))));
  };
  function User(id, surname, forename, email) {
    this.id = id;
    this.surname = surname;
    this.forename = forename;
    this.email = email;
  }
  User.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'User',
    interfaces: []
  };
  User.prototype.component1 = function () {
    return this.id;
  };
  User.prototype.component2 = function () {
    return this.surname;
  };
  User.prototype.component3 = function () {
    return this.forename;
  };
  User.prototype.component4 = function () {
    return this.email;
  };
  User.prototype.copy_zeqzmn$ = function (id, surname, forename, email) {
    return new User(id === void 0 ? this.id : id, surname === void 0 ? this.surname : surname, forename === void 0 ? this.forename : forename, email === void 0 ? this.email : email);
  };
  User.prototype.toString = function () {
    return 'User(id=' + Kotlin.toString(this.id) + (', surname=' + Kotlin.toString(this.surname)) + (', forename=' + Kotlin.toString(this.forename)) + (', email=' + Kotlin.toString(this.email)) + ')';
  };
  User.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.surname) | 0;
    result = result * 31 + Kotlin.hashCode(this.forename) | 0;
    result = result * 31 + Kotlin.hashCode(this.email) | 0;
    return result;
  };
  User.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.surname, other.surname) && Kotlin.equals(this.forename, other.forename) && Kotlin.equals(this.email, other.email)))));
  };
  function XmlPdf(pdf, xmlRoot, type) {
    if (type === void 0)
      type = '';
    this.pdf = pdf;
    this.xmlRoot = xmlRoot;
    this.type = type;
  }
  XmlPdf.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'XmlPdf',
    interfaces: []
  };
  XmlPdf.prototype.component1 = function () {
    return this.pdf;
  };
  XmlPdf.prototype.component2 = function () {
    return this.xmlRoot;
  };
  XmlPdf.prototype.component3 = function () {
    return this.type;
  };
  XmlPdf.prototype.copy_naupia$ = function (pdf, xmlRoot, type) {
    return new XmlPdf(pdf === void 0 ? this.pdf : pdf, xmlRoot === void 0 ? this.xmlRoot : xmlRoot, type === void 0 ? this.type : type);
  };
  XmlPdf.prototype.toString = function () {
    return 'XmlPdf(pdf=' + Kotlin.toString(this.pdf) + (', xmlRoot=' + Kotlin.toString(this.xmlRoot)) + (', type=' + Kotlin.toString(this.type)) + ')';
  };
  XmlPdf.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.pdf) | 0;
    result = result * 31 + Kotlin.hashCode(this.xmlRoot) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  XmlPdf.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.pdf, other.pdf) && Kotlin.equals(this.xmlRoot, other.xmlRoot) && Kotlin.equals(this.type, other.type)))));
  };
  function XmlPdfFromJson(Exploitant, Destinataire, Complement_adresse, No_voie, Lieudit_BP, CP, Commune, Pays) {
    this.Exploitant = Exploitant;
    this.Destinataire = Destinataire;
    this.Complement_adresse = Complement_adresse;
    this.No_voie = No_voie;
    this.Lieudit_BP = Lieudit_BP;
    this.CP = CP;
    this.Commune = Commune;
    this.Pays = Pays;
  }
  XmlPdfFromJson.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'XmlPdfFromJson',
    interfaces: []
  };
  XmlPdfFromJson.prototype.component1 = function () {
    return this.Exploitant;
  };
  XmlPdfFromJson.prototype.component2 = function () {
    return this.Destinataire;
  };
  XmlPdfFromJson.prototype.component3 = function () {
    return this.Complement_adresse;
  };
  XmlPdfFromJson.prototype.component4 = function () {
    return this.No_voie;
  };
  XmlPdfFromJson.prototype.component5 = function () {
    return this.Lieudit_BP;
  };
  XmlPdfFromJson.prototype.component6 = function () {
    return this.CP;
  };
  XmlPdfFromJson.prototype.component7 = function () {
    return this.Commune;
  };
  XmlPdfFromJson.prototype.component8 = function () {
    return this.Pays;
  };
  XmlPdfFromJson.prototype.copy_osr9do$ = function (Exploitant, Destinataire, Complement_adresse, No_voie, Lieudit_BP, CP, Commune, Pays) {
    return new XmlPdfFromJson(Exploitant === void 0 ? this.Exploitant : Exploitant, Destinataire === void 0 ? this.Destinataire : Destinataire, Complement_adresse === void 0 ? this.Complement_adresse : Complement_adresse, No_voie === void 0 ? this.No_voie : No_voie, Lieudit_BP === void 0 ? this.Lieudit_BP : Lieudit_BP, CP === void 0 ? this.CP : CP, Commune === void 0 ? this.Commune : Commune, Pays === void 0 ? this.Pays : Pays);
  };
  XmlPdfFromJson.prototype.toString = function () {
    return 'XmlPdfFromJson(Exploitant=' + Kotlin.toString(this.Exploitant) + (', Destinataire=' + Kotlin.toString(this.Destinataire)) + (', Complement_adresse=' + Kotlin.toString(this.Complement_adresse)) + (', No_voie=' + Kotlin.toString(this.No_voie)) + (', Lieudit_BP=' + Kotlin.toString(this.Lieudit_BP)) + (', CP=' + Kotlin.toString(this.CP)) + (', Commune=' + Kotlin.toString(this.Commune)) + (', Pays=' + Kotlin.toString(this.Pays)) + ')';
  };
  XmlPdfFromJson.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.Exploitant) | 0;
    result = result * 31 + Kotlin.hashCode(this.Destinataire) | 0;
    result = result * 31 + Kotlin.hashCode(this.Complement_adresse) | 0;
    result = result * 31 + Kotlin.hashCode(this.No_voie) | 0;
    result = result * 31 + Kotlin.hashCode(this.Lieudit_BP) | 0;
    result = result * 31 + Kotlin.hashCode(this.CP) | 0;
    result = result * 31 + Kotlin.hashCode(this.Commune) | 0;
    result = result * 31 + Kotlin.hashCode(this.Pays) | 0;
    return result;
  };
  XmlPdfFromJson.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.Exploitant, other.Exploitant) && Kotlin.equals(this.Destinataire, other.Destinataire) && Kotlin.equals(this.Complement_adresse, other.Complement_adresse) && Kotlin.equals(this.No_voie, other.No_voie) && Kotlin.equals(this.Lieudit_BP, other.Lieudit_BP) && Kotlin.equals(this.CP, other.CP) && Kotlin.equals(this.Commune, other.Commune) && Kotlin.equals(this.Pays, other.Pays)))));
  };
  function Sample() {
  }
  Sample.prototype.checkMe = function () {
    return 12;
  };
  Sample.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sample',
    interfaces: []
  };
  function Platform() {
    Platform_instance = this;
    this.name = 'JS';
  }
  Platform.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Platform',
    interfaces: []
  };
  var Platform_instance = null;
  function Platform_getInstance() {
    if (Platform_instance === null) {
      new Platform();
    }
    return Platform_instance;
  }
  function helloWorld(salutation) {
    var tmp$;
    println('Bonjour tout le monde!');
    var message = salutation + ' from Kotlin.JS ' + hello() + ', check me value: ' + (new Sample()).checkMe();
    (tmp$ = document.getElementById('js-response')) != null ? (tmp$.textContent = message) : null;
  }
  function start$unzip$lambda$lambda$lambda(closure$mXmlPdfJson) {
    return function (mXmlText) {
      var tmp$;
      println('String');
      if (typeof mXmlText === 'string') {
        closure$mXmlPdfJson.v = xmlToJson(mXmlText);
        var mParser = new DOMParser();
        var mXmlDoc = mParser.parseFromString(mXmlText, 'application/xml');
        var mFormResulToXml = document.getElementById('XmlFileResult');
        if ((tmp$ = mXmlDoc.getElementsByTagName('t:noConsultationDuTeleserviceSeize')[0]) != null) {
          var tmp$_0;
          if ((tmp$_0 = tmp$.childNodes[0]) != null) {
            var tmp$_1;
            (tmp$_1 = tmp$_0.nodeValue) != null && (mFormResulToXml != null ? mFormResulToXml.appendChild(document.createTextNode('Num\xE9ro de DT : ' + tmp$_1 + '. ')) : null);
          }
        }
      }
      return Unit;
    };
  }
  function start$unzip$lambda$lambda$lambda_0(closure$zipEntry, closure$mXmlFile) {
    return function (mXmlBlob) {
      println('Blob');
      closure$mXmlFile.v = new File([mXmlBlob], closure$zipEntry.name);
      return Unit;
    };
  }
  function start$unzip$lambda$lambda(closure$mArrayList, closure$zip, closure$unzip, closure$mZipName, closure$mXmlPdfJson, closure$mXmlFile) {
    return function (relativePath, zipEntry) {
      println('forEach : ' + relativePath + ' & ' + zipEntry.name);
      println(substringAfterLast(zipEntry.name, 46, ''));
      var mZipEntryName = document.createElement('li');
      mZipEntryName.appendChild(document.createTextNode(zipEntry.name));
      closure$mArrayList.appendChild(mZipEntryName);
      if (equals(substringAfterLast(zipEntry.name, 46, ''), 'zip')) {
        closure$unzip(closure$zip.file(zipEntry.name).async('arraybuffer'), closure$mArrayList, zipEntry.name);
      }
      if (equals(substringAfterLast(zipEntry.name, 46, ''), 'xml') && equals(substringBeforeLast(closure$mZipName, 46, ''), substringBeforeLast(zipEntry.name, 46, ''))) {
        println('Find XML file');
        closure$zip.file(zipEntry.name).async('string').then(start$unzip$lambda$lambda$lambda(closure$mXmlPdfJson));
        closure$zip.file(zipEntry.name).async('blob').then(start$unzip$lambda$lambda$lambda_0(zipEntry, closure$mXmlFile));
      }
      return Unit;
    };
  }
  function start$unzip$lambda(closure$mArrayList, closure$unzip, closure$mZipName, closure$mXmlPdfJson, closure$mXmlFile) {
    return function (zip) {
      println(typeof zip);
      zip.forEach(start$unzip$lambda$lambda(closure$mArrayList, zip, closure$unzip, closure$mZipName, closure$mXmlPdfJson, closure$mXmlFile));
      return Unit;
    };
  }
  function start$unzip(closure$mXmlPdfJson, closure$mXmlFile) {
    return function closure$unzip(mFile, mHtmlElement, mZipName) {
      if (mZipName === void 0)
        mZipName = '';
      var mArrayList = document.createElement('ul');
      mArrayList.setAttribute('id', 'ArrayList');
      mHtmlElement.appendChild(mArrayList);
      JSZip.loadAsync(mFile).then(start$unzip$lambda(mArrayList, closure$unzip, mZipName, closure$mXmlPdfJson, closure$mXmlFile));
    };
  }
  function start$handleFile(closure$unzip) {
    return function (f, div) {
      println('fun handleFile : ' + f.name);
      var mFileName = document.createElement('h4');
      mFileName.appendChild(document.createTextNode(f.name));
      div.appendChild(mFileName);
      closure$unzip(f, div);
      var resultBlock = document.getElementById('result_block');
      resultBlock != null ? removeClass(resultBlock, ['d-none']) : null;
      resultBlock != null ? addClass(resultBlock, ['d-block']) : null;
    };
  }
  function start$lambda$lambda(closure$mRequest, closure$mOutput) {
    return function (it) {
      println(closure$mRequest.statusText);
      if (equals(closure$mRequest.statusText, 'OK')) {
        return closure$mOutput != null ? closure$mOutput.appendChild(document.createTextNode('Envoy\xE9 ! ')) : null;
      }
       else {
        return closure$mOutput != null ? closure$mOutput.appendChild(document.createTextNode('Erreur ' + closure$mRequest.status + ' lors de la tentative d\u2019envoi du fichier.')) : null;
      }
    };
  }
  function start$lambda(closure$mForm, closure$mXmlPdfJson, closure$mXmlFile) {
    return function (it) {
      var tmp$;
      var mOutput = document.getElementById('formresult');
      var mData = new FormData(closure$mForm);
      mData.append('XmlPdf', JSON.stringify(closure$mXmlPdfJson.v));
      if ((tmp$ = closure$mXmlFile.v) != null) {
        println('LOG D - mForm.addEventListener : XmlFile not null');
        mData.delete('ZipFile');
        mData.append('XmlFile', tmp$);
      }
      var mRequest = new XMLHttpRequest();
      mRequest.open('POST', '/uploadxmlfile', true);
      mRequest.onload = start$lambda$lambda(mRequest, mOutput);
      mRequest.send(mData);
      it.preventDefault();
      return Unit;
    };
  }
  function start$lambda_0(closure$mInput, closure$div, closure$handleFile) {
    return function (event) {
      println('change');
      var mFiles = closure$mInput.files;
      if (mFiles != null) {
        var closure$div_0 = closure$div;
        var closure$handleFile_0 = closure$handleFile;
        var tmp$;
        tmp$ = asList(mFiles).iterator();
        while (tmp$.hasNext()) {
          var i = tmp$.next();
          closure$handleFile_0(i, closure$div_0);
        }
      }
      return Unit;
    };
  }
  function start(salutation) {
    var tmp$, tmp$_0, tmp$_1;
    println('Start');
    var mXmlFile = {v: null};
    var mXmlPdfJson = {v: ArrayList_init()};
    var unzip = start$unzip(mXmlPdfJson, mXmlFile);
    var handleFile = start$handleFile(unzip);
    println('Bonjour tout le monde!');
    var mInput = Kotlin.isType(tmp$ = document.getElementById('InputZipFile'), HTMLInputElement) ? tmp$ : throwCCE();
    var div = Kotlin.isType(tmp$_0 = document.getElementById('result'), HTMLDivElement) ? tmp$_0 : throwCCE();
    var mForm = Kotlin.isType(tmp$_1 = document.forms.namedItem('uploadxmlfile'), HTMLFormElement) ? tmp$_1 : throwCCE();
    mForm.addEventListener('submit', start$lambda(mForm, mXmlPdfJson, mXmlFile));
    mInput.addEventListener('change', start$lambda_0(mInput, div, handleFile));
  }
  var currentTab;
  function stepper$lambda(it) {
    nextPrev(-1);
    return Unit;
  }
  function stepper$lambda_0(it) {
    nextPrev(1);
    return Unit;
  }
  function stepper() {
    var tmp$, tmp$_0;
    var mPrevBtn = Kotlin.isType(tmp$ = document.getElementById('prevBtn'), HTMLButtonElement) ? tmp$ : throwCCE();
    mPrevBtn.addEventListener('click', stepper$lambda);
    var mNextBtn = Kotlin.isType(tmp$_0 = document.getElementById('nextBtn'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    mNextBtn.addEventListener('click', stepper$lambda_0);
    showTab(currentTab);
  }
  function showTab(n) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    var x = document.getElementsByClassName('tab');
    (tmp$ = x[n]) != null ? (tmp$.setAttribute('style', 'display: block;'), Unit) : null;
    if (n === 0) {
      (tmp$_0 = document.getElementById('prevBtn')) != null ? (tmp$_0.setAttribute('style', 'display: none;'), Unit) : null;
    }
     else {
      (tmp$_1 = document.getElementById('prevBtn')) != null ? (tmp$_1.setAttribute('style', 'display: inline;'), Unit) : null;
    }
    if (n === (x.length - 1 | 0)) {
      (tmp$_2 = document.getElementById('nextBtn')) != null ? (tmp$_2.innerHTML = 'Envoyer') : null;
      (tmp$_3 = document.getElementById('nextBtn')) != null ? (tmp$_3.className = 'btn btn-success') : null;
    }
     else {
      (tmp$_4 = document.getElementById('nextBtn')) != null ? (tmp$_4.innerHTML = 'Suivant') : null;
      (tmp$_5 = document.getElementById('nextBtn')) != null ? (tmp$_5.className = 'btn btn-primary') : null;
    }
    fixStepIndicator(n);
  }
  function fixStepIndicator(n) {
    var tmp$, tmp$_0, tmp$_1;
    var x = document.getElementsByClassName('step');
    tmp$ = x.length;
    for (var i = 0; i <= tmp$; i++) {
      (tmp$_0 = x[i]) != null ? removeClass(tmp$_0, [' active']) : null;
    }
    (tmp$_1 = x[n]) != null ? addClass(tmp$_1, [' active']) : null;
  }
  function nextPrev(n) {
    var tmp$, tmp$_0;
    println('nextPrev(' + n + ')');
    var x = document.getElementsByClassName('tab');
    if (n === 1 && !validateForm()) {
      println('if (n == 1 && !validateForm()) = true');
      return false;
    }
    (tmp$ = x[currentTab]) != null ? (tmp$.setAttribute('style', 'display: none;'), Unit) : null;
    currentTab = currentTab + n | 0;
    if (currentTab >= x.length) {
      var mForm = Kotlin.isType(tmp$_0 = document.getElementById('regForm'), HTMLFormElement) ? tmp$_0 : throwCCE();
      mForm.submit();
      return false;
    }
    showTab(currentTab);
    return true;
  }
  function validateForm() {
    var tmp$, tmp$_0;
    var valid = {v: true};
    var x = document.getElementsByClassName('tab');
    var y = (tmp$ = x[currentTab]) != null ? tmp$.getElementsByTagName('input') : null;
    if (y != null) {
      var tmp$_1, tmp$_2;
      tmp$_1 = y.length;
      for (var i = 0; i <= tmp$_1; i++) {
        if (Kotlin.isType(y[i], HTMLInputElement)) {
          var mInput = Kotlin.isType(tmp$_2 = y[i], HTMLInputElement) ? tmp$_2 : throwCCE();
          println('Input value : ' + mInput.value);
          if (equals(mInput.value, '') && mInput.required) {
            addClass(mInput, [' active']);
            valid.v = false;
          }
        }
      }
    }
    if (valid.v) {
      (tmp$_0 = document.getElementsByClassName('step')[currentTab]) != null ? addClass(tmp$_0, [' finish']) : null;
    }
    return valid.v;
  }
  function xmlToJson(mXml) {
    var tmp$, tmp$_0;
    println('We read Xml file...');
    var mParser = new DOMParser();
    var mXmlDoc = mParser.parseFromString(mXml, 'application/xml');
    println('We build Json from Xml file...');
    var mJsonArray = ArrayList_init();
    var mXmlStructures = xmlNodesReader(['dossierConsultation', 'listeDesOuvrages', 'ouvrage'], mXmlDoc);
    tmp$ = mXmlStructures.length;
    for (var mIndex = 0; mIndex <= tmp$; mIndex++) {
      if ((tmp$_0 = mXmlStructures[mIndex]) != null) {
        mJsonArray.add_11rb$(jsonStructureBuilder(tmp$_0, mXmlDoc));
      }
    }
    return mJsonArray;
  }
  function xmlNodesReader(path, xmlDoc) {
    var tmp$;
    var mElements = xmlDoc.getElementsByTagName('*');
    for (tmp$ = 0; tmp$ !== path.length; ++tmp$) {
      var mDirectory = path[tmp$];
      var mElement = xmlDoc.getElementsByTagNameNS('http://www.reseaux-et-canalisations.gouv.fr/schema-teleservice/2.2', mDirectory);
      if (mElement.length === 0)
        mElement = xmlDoc.getElementsByTagNameNS('http://www.opengis.net/gml/3.2', mDirectory);
      if (mElement.length === 0)
        mElement = xmlDoc.getElementsByTagNameNS('http://xml.insee.fr/schema', mDirectory);
      mElements = mElement;
    }
    return mElements;
  }
  function xmlNodeReader(path, xmlElement) {
    var mNodeList = xmlElement.getElementsByTagNameNS('http://www.reseaux-et-canalisations.gouv.fr/schema-teleservice/2.2', last(path));
    if (mNodeList.length === 0)
      mNodeList = xmlElement.getElementsByTagNameNS('http://www.opengis.net/gml/3.2', last(path));
    if (mNodeList.length === 0)
      mNodeList = xmlElement.getElementsByTagNameNS('http://xml.insee.fr/schema', last(path));
    return mNodeList;
  }
  function jsonStructureBuilder(mStructure, mXmlDoc) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14;
    var mStructureArray = ArrayList_init();
    tmp$ = XmlToPdfStructure;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var mXmlPdf = tmp$[tmp$_0];
      var mJsonStructureItem = json([]);
      var mXmlPdfValue = {v: ''};
      tmp$_1 = mXmlPdf.xmlRoot;
      for (tmp$_2 = 0; tmp$_2 !== tmp$_1.length; ++tmp$_2) {
        var mXmRoot = tmp$_1[tmp$_2];
        if ((tmp$_3 = xmlNodeValueReader(xmlNodeReader(mXmRoot, mStructure), 0)) != null) {
          if (equals(mXmlPdfValue.v, '')) {
            mXmlPdfValue.v = tmp$_3;
          }
           else {
            mXmlPdfValue.v += ' ' + tmp$_3;
          }
        }
      }
      mJsonStructureItem['name'] = mXmlPdf.pdf;
      mJsonStructureItem['value'] = mXmlPdfValue.v;
      mStructureArray.add_11rb$(mJsonStructureItem);
    }
    tmp$_4 = XmlToPdfDt;
    for (tmp$_5 = 0; tmp$_5 !== tmp$_4.length; ++tmp$_5) {
      var mXmlPdf_0 = tmp$_4[tmp$_5];
      var mJsonStructureItem_0 = json([]);
      var mXmlPdfValue_0 = {v: ''};
      tmp$_6 = mXmlPdf_0.xmlRoot;
      for (tmp$_7 = 0; tmp$_7 !== tmp$_6.length; ++tmp$_7) {
        var mXmRoot_0 = tmp$_6[tmp$_7];
        var mResult = xmlNodesReader(mXmRoot_0, mXmlDoc);
        if (mResult.length > 1) {
          switch (mXmlPdf_0.pdf) {
            case 'Nature_Travaux1_DT':
              if ((tmp$_8 = xmlNodeValueReader(mResult, 0)) != null) {
                mXmlPdfValue_0.v = tmp$_8;
              }

              break;
            case 'Nature_Travaux2_DT':
              if ((tmp$_9 = xmlNodeValueReader(mResult, 1)) != null) {
                mXmlPdfValue_0.v = tmp$_9;
              }

              break;
            case 'Nature_Travaux3_DT':
              if ((tmp$_10 = xmlNodeValueReader(mResult, 2)) != null) {
                mXmlPdfValue_0.v = tmp$_10;
              }

              break;
            case 'Nature_Travaux4_DT':
              if ((tmp$_11 = xmlNodeValueReader(mResult, 3)) != null) {
                mXmlPdfValue_0.v = tmp$_11;
              }

              break;
            case 'Nature_Travaux5_DT':
              if ((tmp$_12 = xmlNodeValueReader(mResult, 4)) != null) {
                mXmlPdfValue_0.v = tmp$_12;
              }

              break;
            case 'Mode_recepisse_DT':
              println('Mode_recepisse_DT : ' + mResult.length);
              if (mResult.length > 0) {
                switch (last(mXmRoot_0)) {
                  case 'modeReceptionElectronique':
                    mXmlPdfValue_0.v = 'Par voie \xE9lectronique';
                    break;
                  case 'modeReceptionCourrier':
                    mXmlPdfValue_0.v = 'Par courrier';
                    break;
                  case 'modeReceptionFax':
                    mXmlPdfValue_0.v = 'Par fax';
                    break;
                }
              }

              break;
            default:if ((tmp$_13 = xmlNodeValueReader(mResult, 0)) != null) {
                mXmlPdfValue_0.v = tmp$_13;
              }

              break;
          }
        }
         else {
          if ((tmp$_14 = xmlNodeValueReader(mResult, 0)) != null) {
            if (equals(mXmlPdf_0.type, 'DateDate')) {
              var mDate = new Date(tmp$_14);
              if (isNaN_0(mDate.getTime())) {
                println('Error date: is NaN : ' + tmp$_14);
                mDate = new Date(substringBefore(tmp$_14, '+'));
                println(tmp$_14);
              }
              mXmlPdfValue_0.v = mDate.getDate().toString();
            }
            if (equals(mXmlPdf_0.type, 'DateMonth')) {
              var mDate_0 = new Date(tmp$_14);
              if (isNaN_0(mDate_0.getTime())) {
                println('Error date: is NaN : ' + tmp$_14);
                mDate_0 = new Date(substringBefore(tmp$_14, '+'));
                println(tmp$_14);
              }
              mXmlPdfValue_0.v = mDate_0.getMonth().toString();
            }
            if (equals(mXmlPdf_0.type, 'DateFullYear')) {
              var mDate_1 = new Date(tmp$_14);
              if (isNaN_0(mDate_1.getTime())) {
                println('Error date: is NaN : ' + tmp$_14);
                mDate_1 = new Date(substringBefore(tmp$_14, '+'));
                println(tmp$_14);
              }
              mXmlPdfValue_0.v = mDate_1.getFullYear().toString();
            }
            if (equals(mXmlPdf_0.type, 'MultiLine1')) {
              if (tmp$_14.length > 48) {
                var mIndex = 47;
                while (equals(mXmlPdfValue_0.v, '')) {
                  if (isWhitespace(tmp$_14.charCodeAt(mIndex))) {
                    var endIndex = mIndex;
                    var $receiver = tmp$_14.substring(0, endIndex);
                    var tmp$_15;
                    mXmlPdfValue_0.v = trim(Kotlin.isCharSequence(tmp$_15 = $receiver) ? tmp$_15 : throwCCE()).toString();
                  }
                  mIndex = mIndex - 1 | 0;
                }
              }
               else {
                mXmlPdfValue_0.v = tmp$_14;
              }
            }
            if (equals(mXmlPdf_0.type, 'MultiLine2')) {
              if (tmp$_14.length > 48) {
                var mIndex_0 = 47;
                while (equals(mXmlPdfValue_0.v, '')) {
                  if (isWhitespace(tmp$_14.charCodeAt(mIndex_0))) {
                    var startIndex = mIndex_0;
                    var $receiver_0 = tmp$_14.substring(startIndex);
                    var tmp$_16;
                    mXmlPdfValue_0.v = trim(Kotlin.isCharSequence(tmp$_16 = $receiver_0) ? tmp$_16 : throwCCE()).toString();
                  }
                  mIndex_0 = mIndex_0 - 1 | 0;
                }
              }
            }
            if (equals(mXmlPdf_0.type, 'NodeName')) {
              println('Mode_recepisse_DT : ' + mResult.length);
              switch (last(mXmRoot_0)) {
                case 'modeReceptionElectronique':
                  mXmlPdfValue_0.v = 'Par voie \xE9lectronique';
                  break;
                case 'modeReceptionCourrier':
                  mXmlPdfValue_0.v = 'Par courrier';
                  break;
                case 'modeReceptionFax':
                  mXmlPdfValue_0.v = 'Par fax';
                  break;
              }
            }
            if (equals(mXmlPdf_0.type, '')) {
              mXmlPdfValue_0.v = tmp$_14;
            }
          }
        }
      }
      mJsonStructureItem_0['name'] = mXmlPdf_0.pdf;
      mJsonStructureItem_0['value'] = mXmlPdfValue_0.v;
      mStructureArray.add_11rb$(mJsonStructureItem_0);
    }
    println('mStructureArray : ' + JSON.stringify(mStructureArray));
    return mStructureArray;
  }
  function xmlSingleNodeReader(root, xmlDoc, destination) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var mNodeList = xmlDoc.getElementsByTagNameNS('http://www.reseaux-et-canalisations.gouv.fr/schema-teleservice/2.2', last_0(root));
    if (mNodeList.length > 1) {
      println('LOG D : xmlSingleNodeReader = mNodeList.length > 1 (' + mNodeList.length + ')');
      tmp$ = mNodeList.length;
      for (var mIndex = 0; mIndex <= tmp$; mIndex++) {
        if ((tmp$_2 = (tmp$_1 = (tmp$_0 = mNodeList[mIndex]) != null ? tmp$_0.parentNode : null) != null ? tmp$_1.nodeName : null) != null) {
          var tmp$_4;
          if (equals(tmp$_2, 't:' + root.get_za3lpa$(root.size - 2 | 0))) {
            if ((tmp$_4 = xmlNodeValueReader(mNodeList, mIndex)) != null) {
              var tmp$_5;
              (tmp$_5 = destination.namedItem(tmp$_4)) != null && (tmp$_5.setAttribute('selected', ''), Unit);
            }
          }
        }
      }
    }
     else {
      println('LOG D : xmlSingleNodeReader = !mNodeList.length > 1 (' + mNodeList.length + ')');
      if ((tmp$_3 = xmlNodeValueReader(mNodeList, 0)) != null) {
        var tmp$_6;
        if ((tmp$_6 = destination.namedItem(tmp$_3)) != null) {
          tmp$_6.setAttribute('selected', '');
        }
      }
    }
  }
  function xmlDateSingleNodeReader(root, xmlDoc, destination) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var mNodeList = xmlDoc.getElementsByTagNameNS('http://www.reseaux-et-canalisations.gouv.fr/schema-teleservice/2.2', last_0(root));
    if (mNodeList.length > 1) {
      println('LOG D : xmlSingleNodeReader = mNodeList.length > 1 (' + mNodeList.length + ')');
      tmp$ = mNodeList.length;
      for (var mIndex = 0; mIndex <= tmp$; mIndex++) {
        if ((tmp$_2 = (tmp$_1 = (tmp$_0 = mNodeList[mIndex]) != null ? tmp$_0.parentNode : null) != null ? tmp$_1.nodeValue : null) != null) {
          var tmp$_4;
          if (equals(tmp$_2, root.get_za3lpa$(root.size - 2 | 0))) {
            if ((tmp$_4 = xmlNodeValueReader(mNodeList, mIndex)) != null) {
              var mDate = new Date(tmp$_4);
              var result = new Object();
              result.weekday = 'long';
              result.year = 'numeric';
              result.month = 'long';
              result.day = 'numeric';
              var mDateOption = result;
              destination.setAttribute('value', mDate.toLocaleDateString('fr-FR', mDateOption));
              destination.readOnly = true;
            }
          }
        }
      }
    }
     else {
      println('LOG D : xmlSingleNodeReader = !mNodeList.length > 1 (' + mNodeList.length + ')');
      if ((tmp$_3 = xmlNodeValueReader(mNodeList, 0)) != null) {
        var mDate_0 = {v: new Date(tmp$_3)};
        if (isNaN_0(mDate_0.v.getTime())) {
          println('Error date: is NaN : ' + tmp$_3);
          mDate_0.v = new Date(substringBefore(tmp$_3, '+'));
          println(tmp$_3);
        }
        var result_0 = new Object();
        result_0.weekday = 'long';
        result_0.year = 'numeric';
        result_0.month = 'long';
        result_0.day = 'numeric';
        var mDateOption_0 = result_0;
        if (mDate_0.v != null) {
          destination.setAttribute('value', mDate_0.v.toLocaleDateString('fr-FR', mDateOption_0));
          destination.readOnly = true;
        }
      }
    }
  }
  function xmlAttributeSingleNodeReader(root, attribute, xmlDoc, destination) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var mNodeList = xmlDoc.getElementsByTagNameNS('http://www.reseaux-et-canalisations.gouv.fr/schema-teleservice/2.2', last_0(root));
    if (mNodeList.length > 1) {
      println('LOG D : xmlSingleNodeReader = mNodeList.length > 1 (' + mNodeList.length + ')');
      tmp$ = mNodeList.length;
      for (var mIndex = 0; mIndex <= tmp$; mIndex++) {
        if ((tmp$_2 = (tmp$_1 = (tmp$_0 = mNodeList[mIndex]) != null ? tmp$_0.parentNode : null) != null ? tmp$_1.nodeName : null) != null) {
          var tmp$_4;
          println('Parent node value = ' + tmp$_2 + ' / for ' + root);
          if (equals(tmp$_2, 't:' + root.get_za3lpa$(root.size - 2 | 0))) {
            if ((tmp$_4 = xmlNodeAttributeReader(mNodeList, mIndex, attribute)) != null) {
              destination.setAttribute('value', tmp$_4);
            }
          }
        }
      }
    }
     else {
      println('LOG D : xmlSingleNodeReader = !mNodeList.length > 1 (' + mNodeList.length + ')');
      if ((tmp$_3 = xmlNodeValueReader(mNodeList, 0)) != null) {
        destination.setAttribute('value', tmp$_3);
      }
    }
  }
  function xmlNodeValueReader(nodeList, index) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = nodeList[index]) != null) {
      var tmp$_1;
      var tmp$_2;
      if ((tmp$_1 = tmp$.childNodes[0]) != null) {
        var tmp$_3;
        var tmp$_4;
        if ((tmp$_3 = tmp$_1.nodeValue) != null) {
          println(tmp$_3);
          tmp$_4 = tmp$_3;
        }
         else
          tmp$_4 = null;
        tmp$_2 = tmp$_4;
      }
       else
        tmp$_2 = null;
      tmp$_0 = tmp$_2;
    }
     else
      tmp$_0 = null;
    return tmp$_0;
  }
  function xmlNodeAttributeReader(nodeList, index, attribute) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = nodeList[index]) != null) {
      var tmp$_1;
      var tmp$_2;
      if ((tmp$_1 = tmp$.getAttribute(attribute)) != null) {
        println(tmp$_1);
        tmp$_2 = tmp$_1;
      }
       else
        tmp$_2 = null;
      tmp$_0 = tmp$_2;
    }
     else
      tmp$_0 = null;
    return tmp$_0;
  }
  var package$fr = _.fr || (_.fr = {});
  var package$lamacq = package$fr.lamacq || (package$fr.lamacq = {});
  package$lamacq.hello = hello;
  var package$utils = package$lamacq.utils || (package$lamacq.utils = {});
  Object.defineProperty(package$utils, 'XmlToPdfStructure', {
    get: function () {
      return XmlToPdfStructure;
    }
  });
  Object.defineProperty(package$utils, 'XmlToPdfDt', {
    get: function () {
      return XmlToPdfDt;
    }
  });
  var package$vo = package$lamacq.vo || (package$lamacq.vo = {});
  package$vo.AcroFormField = AcroFormField;
  package$vo.Dt = Dt;
  package$vo.File = File_0;
  package$vo.PrimeContractor = PrimeContractor;
  package$vo.Project = Project;
  package$vo.ProjectManager = ProjectManager;
  package$vo.ProjectOwner = ProjectOwner;
  package$vo.Structure = Structure;
  package$vo.StructureContact = StructureContact;
  package$vo.User = User;
  package$vo.XmlPdf = XmlPdf;
  package$vo.XmlPdfFromJson = XmlPdfFromJson;
  package$lamacq.Sample = Sample;
  Object.defineProperty(package$lamacq, 'Platform', {
    get: Platform_getInstance
  });
  package$lamacq.helloWorld = helloWorld;
  package$lamacq.start = start;
  Object.defineProperty(package$lamacq, 'currentTab', {
    get: function () {
      return currentTab;
    },
    set: function (value) {
      currentTab = value;
    }
  });
  package$lamacq.stepper = stepper;
  package$lamacq.showTab_za3lpa$ = showTab;
  package$lamacq.fixStepIndicator_za3lpa$ = fixStepIndicator;
  package$lamacq.nextPrev_za3lpa$ = nextPrev;
  package$lamacq.validateForm = validateForm;
  package$lamacq.xmlToJson = xmlToJson;
  package$lamacq.xmlNodesReader_ee75fw$ = xmlNodesReader;
  package$lamacq.xmlNodeReader_cthykj$ = xmlNodeReader;
  package$lamacq.jsonStructureBuilder_hizait$ = jsonStructureBuilder;
  package$lamacq.xmlSingleNodeReader_wkmnct$ = xmlSingleNodeReader;
  package$lamacq.xmlDateSingleNodeReader_8p0kwl$ = xmlDateSingleNodeReader;
  package$lamacq.xmlAttributeSingleNodeReader_qgigux$ = xmlAttributeSingleNodeReader;
  package$lamacq.xmlNodeValueReader_vq8rbs$ = xmlNodeValueReader;
  package$lamacq.xmlNodeAttributeReader_nhpyy$ = xmlNodeAttributeReader;
  XmlToPdfStructure = [new XmlPdf('Exploitant', [['dossierConsultation', 'listeDesOuvrages', 'ouvrage', 'contact', 'societe']]), new XmlPdf('Destinataire', [['dossierConsultation', 'listeDesOuvrages', 'ouvrage', 'contact', 'nom', 'NomFamille'], ['dossierConsultation', 'listeDesOuvrages', 'ouvrage', 'contact', 'prenom', 'Prenom'], ['dossierConsultation', 'listeDesOuvrages', 'ouvrage', 'contact', 'agence']]), new XmlPdf('Complement_adresse', [['dossierConsultation', 'listeDesOuvrages', 'ouvrage', 'contact', 'complement']]), new XmlPdf('No_voie', [['dossierConsultation', 'listeDesOuvrages', 'ouvrage', 'contact', 'numero'], ['dossierConsultation', 'listeDesOuvrages', 'ouvrage', 'contact', 'voie']]), new XmlPdf('Lieudit_BP', [['dossierConsultation', 'listeDesOuvrages', 'ouvrage', 'contact', 'lieuDitBP']]), new XmlPdf('CP', [['dossierConsultation', 'listeDesOuvrages', 'ouvrage', 'contact', 'codePostal']]), new XmlPdf('Commune', [['dossierConsultation', 'listeDesOuvrages', 'ouvrage', 'contact', 'commune']]), new XmlPdf('Pays', [['dossierConsultation', 'listeDesOuvrages', 'ouvrage', 'contact', 'codePays']])];
  XmlToPdfDt = [new XmlPdf('No_GU_DT', [['dossierConsultation', 'DT', 'noConsultationDuTeleserviceSeize']]), new XmlPdf('No_affaire_responsable_projet', [['dossierConsultation', 'DT', 'noAffaireDuResponsableDuProjet']]), new XmlPdf('Jour_DT', [['dossierConsultation', 'DT', 'dateDeLaDeclaration']], 'DateDate'), new XmlPdf('Mois_DT', [['dossierConsultation', 'DT', 'dateDeLaDeclaration']], 'DateMonth'), new XmlPdf('Annee_DT', [['dossierConsultation', 'DT', 'dateDeLaDeclaration']], 'DateFullYear'), new XmlPdf('ResponsableProjetCase', [['dossierConsultation', 'DT', 'typeEntite']]), new XmlPdf('Declaration_conjointe', [['dossierConsultation', 'DT', 'declarationConjointeDTDICT']]), new XmlPdf('Responsable_projet', [['dossierConsultation', 'DT', 'responsableDuProjet', 'denomination']]), new XmlPdf('Pays_DT', [['dossierConsultation', 'DT', 'responsableDuProjet', 'pays']]), new XmlPdf('Siret1_DT', [['dossierConsultation', 'DT', 'responsableDuProjet', 'noSiret']]), new XmlPdf('Siret2_DT', [['dossierConsultation', 'DT', 'responsableDuProjet', 'noSiret']]), new XmlPdf('Siret3_DT', [['dossierConsultation', 'DT', 'responsableDuProjet', 'noSiret']]), new XmlPdf('Siret4_DT', [['dossierConsultation', 'DT', 'responsableDuProjet', 'noSiret']]), new XmlPdf('Organisme_Service', [['dossierConsultation', 'DT', 'representantDuResponsableDeProjet', 'denomination']]), new XmlPdf('Complement_adresse_DT', [['dossierConsultation', 'DT', 'representantDuResponsableDeProjet', 'complementService']]), new XmlPdf('Numero_DT', [['dossierConsultation', 'DT', 'representantDuResponsableDeProjet', 'numero']]), new XmlPdf('Voie_DT', [['dossierConsultation', 'DT', 'representantDuResponsableDeProjet', 'voie']]), new XmlPdf('Lieudit_BP_DT', [['dossierConsultation', 'DT', 'representantDuResponsableDeProjet', 'lieuDitBP']]), new XmlPdf('CP_DT', [['dossierConsultation', 'DT', 'representantDuResponsableDeProjet', 'codePostal']]), new XmlPdf('Commune_DT', [['dossierConsultation', 'DT', 'representantDuResponsableDeProjet', 'commune']]), new XmlPdf('Personne_contacter_DT', [['dossierConsultation', 'DT', 'representantDuResponsableDeProjet', 'personneAcontacter']]), new XmlPdf('Telephone_DT', [['dossierConsultation', 'DT', 'representantDuResponsableDeProjet', 'tel']]), new XmlPdf('Fax_DT', [['dossierConsultation', 'DT', 'representantDuResponsableDeProjet', 'fax']]), new XmlPdf('Courriel_DT', [['dossierConsultation', 'DT', 'representantDuResponsableDeProjet', 'courriel']]), new XmlPdf('Adresse_DT', [['dossierConsultation', 'DT', 'emplacementDuProjet', 'adresse']]), new XmlPdf('CP_Travaux_DT', [['dossierConsultation', 'DT', 'emplacementDuProjet', 'CP']]), new XmlPdf('Commune_Travaux_DT', [['dossierConsultation', 'DT', 'emplacementDuProjet', 'communePrincipale']]), new XmlPdf('Nb_Communes_DT', [['dossierConsultation', 'DT', 'emplacementDuProjet', 'nombreDeCommunes']]), new XmlPdf('Souhait_recepisse_DTDICTconjoint', [['dossierConsultation', 'DT', 'souhaitsPourLeRecepisse', 'souhaiteRecevoirLeRecepisse']]), new XmlPdf('Mode_recepisse_DT', [['dossierConsultation', 'DT', 'souhaitsPourLeRecepisse', 'modeReceptionElectronique'], ['dossierConsultation', 'DT', 'souhaitsPourLeRecepisse', 'modeReceptionCourrier'], ['dossierConsultation', 'DT', 'souhaitsPourLeRecepisse', 'modeReceptionFax']], 'NodeName'), new XmlPdf('Plans_taille_DT', [['dossierConsultation', 'DT', 'souhaitsPourLeRecepisse', 'modeReceptionElectronique', 'tailleDesPlans']]), new XmlPdf('PlanCouleur_DT', [['dossierConsultation', 'DT', 'souhaitsPourLeRecepisse', 'modeReceptionElectronique', 'couleurDesPlans']]), new XmlPdf('PlansVectoriels_DT', [['dossierConsultation', 'DT', 'souhaitsPourLeRecepisse', 'modeReceptionElectronique', 'souhaitDePlansVectoriels']]), new XmlPdf('Plans_Formats_DT', [['dossierConsultation', 'DT', 'souhaitsPourLeRecepisse', 'modeReceptionElectronique', 'formatDesPlansVectoriels']]), new XmlPdf('Nature_Travaux1_DT', [['dossierConsultation', 'DT', 'projetEtSonCalendrier', 'natureDesTravaux']]), new XmlPdf('Nature_Travaux2_DT', [['dossierConsultation', 'DT', 'projetEtSonCalendrier', 'natureDesTravaux']]), new XmlPdf('Nature_Travaux3_DT', [['dossierConsultation', 'DT', 'projetEtSonCalendrier', 'natureDesTravaux']]), new XmlPdf('Nature_Travaux4_DT', [['dossierConsultation', 'DT', 'projetEtSonCalendrier', 'natureDesTravaux']]), new XmlPdf('Nature_Travaux5_DT', [['dossierConsultation', 'DT', 'projetEtSonCalendrier', 'natureDesTravaux']]), new XmlPdf('Projet_DT', [['dossierConsultation', 'DT', 'projetEtSonCalendrier', 'decrivezLeProjet']], 'MultiLine1'), new XmlPdf('Projet2_DT', [['dossierConsultation', 'DT', 'projetEtSonCalendrier', 'decrivezLeProjet']], 'MultiLine2'), new XmlPdf('TST', [['dossierConsultation', 'DT', 'projetEtSonCalendrier', 'emploiDeTechniquesSansTranchees']]), new XmlPdf('Distance_m_DT', [['dossierConsultation', 'DT', 'projetEtSonCalendrier', 'distanceMinimaleEntreLesTravauxEtLaLigneElectrique']]), new XmlPdf('Distance_cm_DT', [['dossierConsultation', 'DT', 'projetEtSonCalendrier', 'distanceMinimaleEntreLesTravauxEtLaLigneElectrique']]), new XmlPdf('Prox_reseaux_elec_CaseDT', [['dossierConsultation', 'DT', 'projetEtSonCalendrier', 'souhaitLesPlansDesReseauxElectriqueAeriens']]), new XmlPdf('Jour_travaux_DT', [['dossierConsultation', 'DT', 'projetEtSonCalendrier', 'datePrevuePourLeCommencementDesTravaux']], 'DateDate'), new XmlPdf('Mois_travaux_DT', [['dossierConsultation', 'DT', 'projetEtSonCalendrier', 'datePrevuePourLeCommencementDesTravaux']], 'DateMonth'), new XmlPdf('Annee_travaux_DT', [['dossierConsultation', 'DT', 'projetEtSonCalendrier', 'datePrevuePourLeCommencementDesTravaux']], 'DateFullYear'), new XmlPdf('Duree_travaux_DT', [['dossierConsultation', 'DT', 'projetEtSonCalendrier', 'dureeDuChantierEnJours']]), new XmlPdf('Investigations', [['dossierConsultation', 'DT', 'investigationsComplementairesDT', 'realisationDInvestigationsComplementaires']]), new XmlPdf('Investigations_complementaires', [['dossierConsultation', 'DT', 'investigationsComplementairesDT', 'motifDeRealisationOuNonDInvestigation']]), new XmlPdf('Jour_IC', [['dossierConsultation', 'DT', 'investigationsComplementairesDT', 'dateDesInvestigationsComplementaires']], 'DateDate'), new XmlPdf('Mois_IC', [['dossierConsultation', 'DT', 'investigationsComplementairesDT', 'dateDesInvestigationsComplementaires']], 'DateMonth'), new XmlPdf('Annee_IC', [['dossierConsultation', 'DT', 'investigationsComplementairesDT', 'dateDesInvestigationsComplementaires']], 'DateFullYear'), new XmlPdf('IC_avec_DICT', [['dossierConsultation', 'DT', 'investigationsComplementairesDT', 'InvestigationsSusceptibleDeNecessiterUneDICT']]), new XmlPdf('Envoi_resultats_IC', [['dossierConsultation', 'DT', 'investigationsComplementairesDT', 'envoiDesResultatsAuxExploitantsDOuvragesEtAuxEntreprises']]), new XmlPdf('Nom_Signataire_DT', [['dossierConsultation', 'DT', 'signatureDuResponsableDuProjetOuDeSonRepresentant', 'nomDuSignataire']]), new XmlPdf('Nombre_PJ_DT', [['dossierConsultation', 'DT', 'signatureDuResponsableDuProjetOuDeSonRepresentant', 'nombrePagesJointes']])];
  currentTab = 0;
  Kotlin.defineModule('aipr', _);
  return _;
}));

//# sourceMappingURL=aipr.js.map
