const { Item, GildedRose } = require('.././app/glided-rose');

describe('Gilded Rose', () => {
  it('should not change name of item', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });
  it('should lower SellIn and Quality by 1', () => {
    const gildedRose = new GildedRose([new Item('foo', 4, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(3);
    expect(items[0].quality).toBe(5);
  });
  it('should not reduce quality to less than 0', () => {
    const gildedRose = new GildedRose([new Item('foo', 4, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(3);
    expect(items[0].quality).toBe(0);
  });
  describe('SellIn date has passed', () => {
    it('should reduce quality twice as fast', () => {
      const gildedRose = new GildedRose([new Item('foo', -1, 6)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-2);
      expect(items[0].quality).toBe(4);
    });
    it('should not reduce quality to lower than 0', () => {
      const gildedRose = new GildedRose([new Item('foo', -2, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-3);
      expect(items[0].quality).toBe(0);
    });
  });

  
});