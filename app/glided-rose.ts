export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      
      const name: string = this.items[i].name;

      this.items[i].sellIn--;

      if (name === 'Aged Brie') 
        handleAgedBrie(this.items[i]);
      else if (name === 'Backstage passes to a TAFKAL80ETC concert')
        handleBackstagePasses(this.items[i]);
      else if (name === 'Sulfuras, Hand of Ragnaros') 
        handleSulfuras(this.items[i]);
      else if (name === 'Conjured')
        handleConjured(this.items[i]);
      else 
        handleRestGoods(this.items[i]);

      handleQualityBounds(this.items[i]);

      }
    return this.items;
  }
}

function handleAgedBrie(item: Item) {
  item.quality+=1;
}


function handleBackstagePasses(item: Item) {
  if(item.sellIn < 0) item.quality = 0;
  else if (item.sellIn < 5) item.quality += 3;
  else if (item.sellIn < 10) item.quality += 2;
  else item.quality += 1;
}

function handleSulfuras(item: Item) {
  item.sellIn += 1; 
  return;
}

function handleRestGoods(item: Item) {
  item.quality -= 1;
  if( item.sellIn < 0 ) item.quality -= 1;
}

function handleConjured(item: Item) {
  item.quality -= 2;
  // if( item.sellIn < 0 ) item.quality -= 2; #should i reduce the quantity by 4 if sellIn is negative
}

function handleQualityBounds(item: Item) {
  if( item.quality < 0 ) item.quality = 0;
  else if( item.quality > 50 ) item.quality = 50;
}

