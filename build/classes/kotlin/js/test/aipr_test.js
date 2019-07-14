(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'aipr', 'kotlin-test'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('aipr'), require('kotlin-test'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'aipr_test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'aipr_test'.");
    }
    if (typeof aipr === 'undefined') {
      throw new Error("Error loading module 'aipr_test'. Its dependency 'aipr' was not found. Please, check whether 'aipr' is loaded prior to 'aipr_test'.");
    }
    if (typeof this['kotlin-test'] === 'undefined') {
      throw new Error("Error loading module 'aipr_test'. Its dependency 'kotlin-test' was not found. Please, check whether 'kotlin-test' is loaded prior to 'aipr_test'.");
    }
    root.aipr_test = factory(typeof aipr_test === 'undefined' ? {} : aipr_test, kotlin, aipr, this['kotlin-test']);
  }
}(this, function (_, Kotlin, $module$aipr, $module$kotlin_test) {
  'use strict';
  var Sample = $module$aipr.fr.lamacq.Sample;
  var assertTrue = $module$kotlin_test.kotlin.test.assertTrue_ifx8ge$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var test = $module$kotlin_test.kotlin.test.test;
  var suite = $module$kotlin_test.kotlin.test.suite;
  var hello = $module$aipr.fr.lamacq.hello;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  function SampleTests() {
  }
  SampleTests.prototype.testMe = function () {
    assertTrue((new Sample()).checkMe() > 0);
  };
  SampleTests.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SampleTests',
    interfaces: []
  };
  function SampleTestsJS() {
  }
  SampleTestsJS.prototype.testHello = function () {
    assertTrue(contains(hello(), 'JS'));
  };
  SampleTestsJS.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SampleTestsJS',
    interfaces: []
  };
  var package$fr = _.fr || (_.fr = {});
  var package$lamacq = package$fr.lamacq || (package$fr.lamacq = {});
  package$lamacq.SampleTests = SampleTests;
  package$lamacq.SampleTestsJS = SampleTestsJS;
  suite('fr.lamacq', false, function () {
    suite('SampleTests', false, function () {
      test('testMe', false, function () {
        return (new SampleTests()).testMe();
      });
    });
    suite('SampleTestsJS', false, function () {
      test('testHello', false, function () {
        return (new SampleTestsJS()).testHello();
      });
    });
  });
  Kotlin.defineModule('aipr_test', _);
  return _;
}));

//# sourceMappingURL=aipr_test.js.map
