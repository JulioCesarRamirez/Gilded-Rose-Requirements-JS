function Item(name, sellIn, quality) {
  this.name = name;
  this.sellIn = sellIn;
  this.quality = quality;
}

Item.prototype.incrementQuality = function () {
  if (this.quality < 50) {
    this.quality++;
  }
}

Item.prototype.decrementQuality = function (number) {
  this.quality = Math.max(0, this.quality - number);
}

Item.prototype.decrementSellIn = function () {
  this.sellIn--;
}

var items = []

var itemUpdateFunctions = {
  "Conjured Mana Cake": function(item) {
    item.decrementQuality(2);
    item.decrementSellIn();
  },
  "Aged Brie": function(item) {
    item.incrementQuality();
    item.decrementSellIn();
  },
  "Backstage passes to a TAFKAL80ETC concert": function(item) {
    item.incrementQuality();
    if (item.sellIn < 11) item.incrementQuality();
    if (item.sellIn < 6) item.incrementQuality();
    item.decrementSellIn();
    if (item.sellIn < 0) item.quality = 0;
  },
  "Sulfuras, Hand of Ragnaros": function(item) { }
};

function updateStandardItem(item) {
  item.decrementSellIn();
  if (item.sellIn < 0) {
    item.decrementQuality(2);
  } else {
    item.decrementQuality(1);
  }
}

function updateQuality() {
  items.forEach(function (item) {
    var itemUpdateFunction = itemUpdateFunctions[item.name];
    if (itemUpdateFunction) {
      itemUpdateFunction(item);
    } else {
      updateStandardItem(item);
    }
  });
}

module.exports = {
  Item: Item,
  items: items,
  updateQuality: updateQuality
};