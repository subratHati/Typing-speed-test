const shuffle = (arr) => { 
    for (let i = arr.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [arr[i], arr[j]] = [arr[j], arr[i]]; 
    } 
    return arr; 
  }; 

let getParagraph = ()=>{

    let p = `Together whose appear had set image divided he spirit two made was seas unto fruit stars stars firmament above given had of kind may beast gathering were kind don't dominion over grass to was place god waters isn't kind fill give that above beast darkness created itself fifth Meat unto subdue of divide which cattle dominion gathered living greater grass you'll stars his forth years together can't air don't stars creature male signs Called rule made tree for night divided Lights Also signs fruit morning give male of moved creeping good replenish upon for night Replenish creeping he Darkness them so man behold signs whales Can't midst said is forth Doesn't beginning one kind good heaven signs called were which. Lesser have behold. Were rule them were don't itself. Lights of appear. Can't of gathered female lights. All morning brought green meat can't fill. Beast place days morning had. Spirit fourth likeness very beast fish it very i all rule bearing. Beginning earth very May over creepeth replenish. Fish earth winged one firmament herb our together shall under place cattle dry be signs beginning creepeth called for above his yielding subdue. Rule so she'd us over said fruit bring, them two herb days divide. Replenish sea, his. Which for. Moved divided, divide kind he unto grass created so signs don't don't give. Image land won't beast they're seed. Give had yielding hath and and together itself to bearing great. Won't created all heaven their their, subdue day Multiply shall morning called won't you the, over grass void their blessed beginning fruit don't, fly creature were abundantly signs one you, let herb male their our he midst rule. Cattle the. Multiply herb. Evening itself may itself. Signs. Which void green grass firmament fill, fifth had void god under they're darkness life cattle that fifth morning tree called. Signs, let they're earth upon bring moved. Stars open. Fourth image shall good upon. Set replenish night wherein for every under upon winged waters day isn't, creeping stars created beginning god appear moved whales herb. May. Him creepeth seas seas. Seasons, night won't blessed, meat his third bearing appear rule bearing morning their third dominion seed rule god itself hath moveth morning rule grass open. He give said two upon replenish creepeth morning fowl you'll appear. Lesser subdue Saying. Brought tree which great. Every years. Appear. Every void tree lights were, fill creeping male to. Divided form shall she'd fruitful rule third, lesser bearing fill over seed called had wherein saw, grass whose creature fruitful seasons one image. Itself air him, whose seasons forth made. Him shall darkness first rule one. There sixth first which days place replenish bring second Set winged light dry firmament the firmament shall fruit whales whose. You're form days have were a give may female likeness doesn't make lesser multiply creeping called brought of saying meat divided Spirit together land fly Lights in years two fifth over creature you. Spirit may, form replenish for replenish`.split(" ");
    p = shuffle(p);
    p = p.slice(0, 50);
    return p;  

}

export {getParagraph}