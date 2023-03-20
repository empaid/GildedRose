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

  it('should increase quality of "Aged Brie"', () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 4, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(3);
    expect(items[0].quality).toBe(2);
  });

  it('should not increase quality more than 50"', () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 2, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(50);
  });

  it('should not reduce Quality of "Sulfuras, Hand of Ragnaros"', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 2, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(4);
  });


  describe('"Backstage passes to a TAFKAL80ETC concert"', () => {
    
    it('should increase quality by 1 when SellIn is more than 10"', () => {
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 13, 5)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(12);
      expect(items[0].quality).toBe(6);
    });

    it('should increase quality by 2 when SellIn is 10 or less"', () => {
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 5)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(7);
    });

    it('should increase quality by 3 when SellIn is more than 1"', () => {
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 5)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(4);
      expect(items[0].quality).toBe(8);
    });

    it('should set quality to 0 when SellIn is more than 1"', () => {
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 5)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(0);
    });
  });


  
});