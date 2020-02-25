var blocks = [
    {"height": 70, "width": 150, "count": 3, "style": {"top": "5px", "left": "5px"}},
    {"height": 100, "width": 200, "count": 9, "style": {"top": "85px", "left": "5px"}},
    {"height": 70, "width": 120, "count": 10, "style": {"top": "5px", "left": "165px"}},
    {"height": 100, "width": 100, "count": 15, "style": {"top": "85px", "left": "215px"}},
    {"height": 150, "width": 30, "count": 3, "style": {"top": "5px", "left": "325px"}},
    {"height": 190, "width": 150, "count": 4, "style": {"top": "5px", "left": "365px"}},
    {"height": 120, "width": 80, "count": 3, "style": {"top": "5px", "left": "525px"}},
    {"height": 140, "width": 240, "count": 5, "style": {"top": "5px", "left": "615px"}},
    {"height": 50, "width": 360, "count": 7, "style": {"top": "150px", "left": "525px"}},
    {"height": 190, "width": 60, "count": 8, "style": {"top": "5px", "left": "895px"}}
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
        var block = $('<div class="draggable" data-height="'+ el.height +'" data-width="'+ el.width +'"><div class="draggable_count">' + el.count + '</div></div>').css({'height': el.height, 'width': el.width, ...el.style});
        $('.blocks_container .blocks').append(block);
    }
    $('.draggable').draggable({revert: true, helper: "clone"})

}

function createDraggableContainer(){
    var $grid = $(".workPanel").packery({
        itemSelector: ".droppable",
        gutter: 5,
        resize: false
    });
    assignEvent();
    $(".workPanel").droppable({
        drop: function(event, ui){
            var el = $(ui.draggable),
                createDiv = $('<div class="droppable" data-height="'+ el.data().height +'" data-width="'+ el.data().width +'"><div class="delete">X</div></div>').css({'height': el.data().height, 'width': el.data().width});
            $(this).append(createDiv).packery('appended', createDiv);

            $('.blocks_count').text($('.workPanel').children().length);
            checkBlocksLeft(el, 'minus');
        }
    });
}

function assignEvent(){
    $(".workPanel").on( 'click','.delete', function(event) {
        event.preventDefault()
        var eventElement = $(event.currentTarget).parent('.droppable');
        $(".workPanel").packery( 'remove', eventElement )
            .packery('shiftLayout');
        $('.blocks_count').text($('.workPanel').children().length -1);
        checkBlocksLeft(eventElement, 'plus');
    });
}

function checkBlocksLeft(el, operation){
    var blocks_left = $('.blocks div[data-width="'+ el.data().width +'"][data-height="'+ el.data().height +'"]').find('.draggable_count').get(0);
    if(operation == 'plus'){
        $(blocks_left).text($(blocks_left).text()*1+1);
    }else{
        $(blocks_left).text($(blocks_left).text()*1-1);
    }

    if($(blocks_left).text() == 0){
        $(blocks_left).parent('.draggable').hide();
    }else{
        $(blocks_left).parent('.draggable').show();
    }
}









createWorkingBlocks(header);
createDraggableBlocks(blocks);
createDraggableContainer()
