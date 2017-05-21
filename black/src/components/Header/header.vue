<template>
  <div class="search-bar">
    <div class="text">
      <span class="fl ico"></span>
      <input type="text" class="fl f12 c_fff" placeholder="搜索宝贝">
    </div>
    <div class="submit">搜索</div>
  </div>
</template>

<script>
  export default {
    name: 'headerBar',
    data () {
    return {
    }
  }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .search-bar{
    width: 100%;
    height: 0.44rem;
    background: #242424;
    padding: 0.1rem;
    border-bottom: 1px solid #e5e5e5;
    display:-webkit-box;
    box-sizing:border-box;
    position:absolute;
    top:0;
    left:0;
  }
  .text{
    -webkit-box-flex:1;
    background: #1a1a1a;
    line-height: 0.44rem;
    width: 84%;
    position:relative;
  }
  .text .ico{
    display: block;
    width: .15rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAhCAYAAAAh3nDkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMyM0NCREQ0OUZFMDExRTZCMTdDQTIxMjNCOUNBNUI2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMyM0NCREQ1OUZFMDExRTZCMTdDQTIxMjNCOUNBNUI2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzIzNjQwQzM5RkUwMTFFNkIxN0NBMjEyM0I5Q0E1QjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzIzNjQwQzQ5RkUwMTFFNkIxN0NBMjEyM0I5Q0E1QjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ulU+TAAACxElEQVR42ryXTWsTURSGZ5IqLqpQsLgoKrGtItadWvwq1oWKH+iqRlHsplkWN0LtDzC6k+4SqAhCtdCN+FFUMNCKFdGFaEG0RayC0AqCcaOQxveWZ2QyJJlJncmBh9xkZt73ZO7ce87YmUzG8glb7BfHxF7RJpo49kPMiOfivpgURT/BVCq19NlQ5ZyY6BWXMSwX68AkdYlE0uKmWPRLIlbh94R4IYYxnhPXxGGxXqwSq8VWcYRjnzh3mGsTyzE/IF6KnZieFZvEgHgsvorf4pd4Lx5xrJ1z57jWaHTVYn4IsbXM4XZxWxQs/yhwbgfXGo0n3C1f8y1iTKwUQ+Kk+GnVHnmuHUJrDO2K5nFxi3kcFReDPDBVYhENo9WIdryS+QXm6YvoC7JcAkQRLecZ6C1nbrOcLB6cvBVe5D3atte8iyXymdsUdoyi3eZ9+o35UcZ3Aj7VtUYBbcvl9c98D+OcFV042ru95u2M30Vo7mhv9po7ReJ7hOYLfDYF2dvrEjHKosV2GFU0u0pwiflHxh0RmjvaH7zmU4y7IzR3tKe85g8YJ8vtvyFNbZLxQ++BCTqQjeJ0BOZJtGdos0rMTQG4yvc0VSisaETTwqOkUto0kHFanx3sxWdCqGw2zYW5m69Fp3f7jrn23/O0Rubk6/+5B5imMoOW0TxXrm64DUw/1iP+iH5xV6xZhnGC5duHVg/avj3cuDhFtsfFW6YgyF2Ic+4kHZGJb+JVLd3rOJ2HmacNYoS2OE2D2SJWQAu/pfm3I/z2xrWCcq4driQqvTSY27SL1mdQtNKJDPj8+1lxhZcGs10/FdtIoNtVYHzfWMyyuIHQPnGC2t/qeV2a5XXpnnjmWk7z4mC1BBoCdqITUGvMY5grl4BdLBZD21Gy2Wy1quYkMO0kUK96voDhNAmYqWiuZzPhTsAOOudRJLA0/ivAAHoAqM6grsGpAAAAAElFTkSuQmCC) 100% no-repeat;
    background-size: .15rem;
    height: .15rem;
    z-index: 100;
    position: absolute;
    top: 5px;
    left: 2px;
  }
  .text:after{
    font-size: 0;
    display: block;
    visibility: hidden;
    clear: both;
    height: 0;
    content: ' ';
  }
  input{
    width:100%;
    border: none;
    height: 0.24rem;
    padding-left: 0.2rem;
    box-sizing: border-box;
    display:block;
    color: #ffffff;
    position:absolute;
    background: #1a1a1a;
    top:0;
    left:0;
  }
  .text::-webkit-input-placeholder{color:#fff;}
  .submit{
    display: block;
    width: 0.4rem;
    text-align: right;
    font-size: 0.12rem;
    color: #fff;
    margin-top: 4px;
  }
</style>


