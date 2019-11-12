var blocks = [
    {"height": 70, "width": 150, "count": 3},
    {"height": 100, "width": 200, "count": 9},
    {"height": 70, "width": 120, "count": 10},
    {"height": 100, "width": 100, "count": 15},
    {"height": 150, "width": 30, "count": 3},
    {"height": 190, "width": 150, "count": 4},
    {"height": 140, "width": 240, "count": 5},
    {"height": 50, "width": 360, "count": 7},
    {"height": 120, "width": 80, "count": 3},
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
    var points = {},
        reset = false;
    for(var i in blocks){
        var el = blocks[i];
        var block = $('<div class="draggable" data-height="'+ el.height +'" data-width="'+ el.width +'"></div>').css({'height': el.height, 'width': el.width});
        $('.blocks_container .blocks').append(block);
        var result = displayBlock(points, block[0], reset);
        points = result.points;
        reset = result.reset;
    }
}

function displayBlock(points, block, reset){
    var parentElem = $('.blocks_container .blocks'),
        endWidth = 0,
        endHeight = 0;
    if($(parentElem).find('.draggable').length === 1){
        endWidth = block.offsetLeft + block.clientWidth;
        endHeight =  block.offsetTop + block.clientHeight;
        points = setEndPoint(points, endWidth, endHeight);
    }else{
        var bottomPlace = $(parentElem).height() - points.height - 5;
        var leftPlace = $(parentElem).width() - points.width - 5;
        if(bottomPlace >= block.clientHeight && leftPlace >= block.clientWidth){
            if(!reset){
                $(block).css({top: points.height});
            }else{
                $(block).css({top: points.height, left: points.width});
            }
            endHeight = points.height + block.clientHeight;
            endWidth = points.width;
            reset = false;
        }else if(leftPlace >= block.clientWidth && bottomPlace < block.clientHeight){
            $(block).css({left: points.width});
            endHeight = block.clientHeight;
            endWidth = points.width + block.clientWidth;

        }
        points = setEndPoint(points, endWidth, endHeight, reset);

    }
    return {points: points, reset: reset};
}

function setEndPoint(points, width, height, reset){
    if(Object.keys(points).length){
        if(points.width < width || reset){
            points.width = width + 5;
        }
        if(points.height < height || reset){
            points.height = height + 5;
        }
    }else{
        points.width = width;
        points.height = height;

    }
    return points;
}


createWorkingBlocks(header);
createDraggableBlocks(blocks);
