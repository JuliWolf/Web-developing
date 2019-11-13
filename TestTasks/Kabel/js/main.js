var blocks = [
    {"height": 70, "width": 150, "count": 3},
    {"height": 100, "width": 200, "count": 9},
    {"height": 70, "width": 120, "count": 10},
    {"height": 100, "width": 100, "count": 15},
    {"height": 150, "width": 30, "count": 3},
    {"height": 190, "width": 150, "count": 4},
    {"height": 120, "width": 80, "count": 3},
    {"height": 140, "width": 240, "count": 5},
    {"height": 50, "width": 360, "count": 7},
    {"height": 190, "width": 60, "count": 8}
];

var header = {
    blocks: {
        title: 'Область объектов',
        style: {
            height: '200px',
            width: '1000px'
        },
        elClass: 'blocks',
        parentBlock: 'blocks_container'
    },
    workPanel: {
        title: 'Область заполнения',
        style: {
            height: '400px',
            width: '600px'
        },
        elClass: 'workPanel',
        parentBlock: 'workPanel_container'
    }
};

function createWorkingBlocks (obj){
    for(var i in obj){
        var el = obj[i];
        var elBlock = $('<div class="'+ el.elClass +' border"></div>').css(el.style);
        var parentBlock = $('.'+el.parentBlock);
        parentBlock.append(elBlock).find('h3').text(el.title)
                    .append('<span class="size">'+ el.style.height.replace('px', '') + 'x'+ el.style.width.replace('px', '') +'</span>');
    }
}

function createDraggableBlocks(blocks){
    for(var i in blocks){
        var el = blocks[i];
        var block = $('<div class="draggable" data-height="'+ el.height +'" data-width="'+ el.width +'"><div class="draggable_count">' + el.count + '</div></div>').css({'height': el.height, 'width': el.width});
        $('.blocks_container .blocks').append(block);
    }
    var $grid = $(".blocks").packery({
        itemSelector: ".draggable",
        gutter: 2,
        horizontal: true
    });

    $grid.find(".draggable").each(function(i, gridItem) {
        var draggie = new Draggabilly(gridItem);
        $grid.packery("bindDraggabillyEvents", draggie);
    });
    assignEvent();
}

function createDraggableContainer(){
    var $grid = $(".workPanel").packery({
        itemSelector: ".draggable",
        gutter: 2,
        horizontal: true
    });
}

function assignEvent(){
    $(".blocks").on( 'drag','.draggable', function(event) {
        event.preventDefault();
        console.log(event.target)
    });
}









createWorkingBlocks(header);
createDraggableBlocks(blocks);
createDraggableContainer();
