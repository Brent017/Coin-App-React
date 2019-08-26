import React from 'react'

const FactFunction = () => {
	const facts = [
		'The Constitution Only Allows Coins, Not Paper Money?  The Founding Fathers didn’t trust paper money, so they didn’t authorize it. It took an act of Congress in 1862 to print paper money for permanent circulation, and except for brief periods, some types remained redeemable in gold or silver until 1971, when the last U.S. Notes were discontinued.',
		'The U.S. Dollar was Based on a Spanish Coin?  The U.S. didn’t start minting its own coins until 1792. Until then, the Spanish silver 8-real coin, made in Mexico City (also known as “pieces of eight”), was so common that it was used as the basis for the value of the dollar. It remained legal tender in the U.S. until the mid-180',
		'A Bit Was a Real Denomination — More or Less?  That same Spanish silver coin could easily be cut into eight parts (giving it its colloquial name) for smaller transactions. Those pieces were called bits, hence the expression “two-bits,” which was commonly used to describe one-quarter (2/8ths) of a dollar.',
		'The Eagle was a real denomination?  The 10-dollar gold eagle, half-eagle and quarter-eagle coins were denominations specified in the Coinage Act of 1792. The double eagle $20 gold coin was created by that name in 1849.',
		'All U.S. Coins Were Originally Gold, Silver, or Copper?  Coins originally had worth of their own, since they were made of specific amounts of precious or semi-precious metals. When the value of those metals exceeded the coins’ worth, alloys and non-precious metals were substituted. Today’s circulating coins contain no gold or silver.',
		'There Are No Pennies in U.S. Coinage?  The coin representing 1/100th of a U.S. dollar is a cent, not a penny. The term penny came from European settlers who used the word to describe a small unit of currency in their native countries, but it has never been an official term in the U.S.',
		'There Were 2-Cent and 3-Cent U.S. Coins Once?  When the U.S. started minting coins in 1792, a dollar bought a lot more than it does today, so a few cents were all you needed to buy everyday items like food and sundries. That made 2- and 3-cent coins practical. Two-cent coins were discontinued in 1873 and 3-cents in 1889.',
		'A Nickel Wasn’t Always a Nickel—Or Made of Nickel?  We’ve always had the dime, but original 5-cent coins were called half-dimes and were made of silver. The small, thin coins were hard to use and easily counterfeited, and were replaced by a copper-nickel coin in 1873.',
		'All U.S. Coins Bear Two Mottos?  Federal law dictates that all U.S. coins carry the mottos “In God We Trust” and “E Pluribus Unum.”',
		'Many Coins Are Worth Millions?  In 2013, a 1794 “Flowing Hair” silver dollar sold at auction for over $10 million. 1913 Liberty Head nickels have sold for as much as $5 million. Pennies (OK, 1-cent coins) haven’t cracked the million-dollar mark yet, but a 1943 steel Wheat Cent can bring as much as $110,000.',
		'Counterfeiting used to be a Capital Offense?  Because early coins were more crudely made, they were relatively easy to fake, so the 1792 Coin Act made counterfeiting or defacing coins punishable by death.',
		'Billions of Dollars Are Just Lying Around?  An estimated $10 billion in coins is held in U.S. homes. Another 58 million is left behind on airplanes worldwide, according to one estimate.']

	let item = facts[Math.floor(Math.random()*facts.length)];
	return item
}

export default FactFunction;