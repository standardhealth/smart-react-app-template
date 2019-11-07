import {config} from '../util/ConfigManager';

test('Test add/get', ()=> {
    config.add({"foo":"bar"});
    expect(config.get("foo","baz")).toMatch("bar");
    expect(config.get("baz","biz")).toMatch("biz");

    //get nested value
    config.add({"a":{"b":{"c":"d"}}});
    expect(config.get("a.b.c")).toMatch("d");
})