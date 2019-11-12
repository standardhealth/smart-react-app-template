import config from './ConfigManager';

test('Test add', () => {
    config.add({"foo":"bar"});
    expect(config.config.foo).toMatch("bar");
})

test('Test get', () => {
    expect(config.get("foo","baz")).toMatch("bar");
})

test('Test default get', () => {
    expect(config.get("baz","biz")).toMatch("biz");
})

test('Test nested value get', () => {
    config.add({"a":{"b":{"c":"d"}}});
    expect(config.get("a.b.c")).toMatch("d");
})