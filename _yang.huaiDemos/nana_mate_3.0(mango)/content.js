var feedGenerator = (function($) {
  function hunantv(f, url){
	  f.n=$(".play-index-til").text();
	  f.ch="2015";
	  return f;
  }
  function youku(f, url) {
    console.log("youku");
    f.n = $("h1.title").text();
    f.ch = "2000";
    console.log(f);
    return f;
  }

  function tudou(f, url) {
    console.log("tudou");
    if (url.indexOf("programs/view") < 0 && url.indexOf("albumplay") < 0) {
      console.log("tudou: not a video page");
      return;
    }

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerText = "document.body.setAttribute('config', JSON.stringify(pageConfig));";
    document.head.appendChild(script);
    var config = JSON.parse(document.body.getAttribute('config'));
    title = config.kw;

    if (url.indexOf("programs/view") >= 0) {
      desc = config.desc;
      thumb = config.pic;
    } else if (url.indexOf("albumplay") >= 0) {
      desc = config.ldesc;
      thumb = config.lpic;
    }
    
    if (!title) {
      return;
    }
    
    f.n = title;
    f.ch = "2002";
    f.rth = thumb;
    f.snip = desc;

    return f;
  }

  function souhu(f, url) {
    console.log("souhu");
    title = $("meta[property=og\\:title]").attr("content");
    thumb = $("meta[property=og\\:image]").attr("content");

    if (!title) {
      return;
    }

    f.n = title;
    f.ch = "2001";
    f.rth = thumb;

    return f;
  }

  function iqiyi(f, url) {
    console.log("iqiyi");
    title = $("meta[itemprop=name]").attr("content");
    thumb = $("meta[itemprop=image]").attr("content");

    if (!title) {
      title = $("#widget-videoname").text();
    }

    if (!title) {
      title = $("#widget-videotitle").text();
    }

    if (!title) {
      title = $("span[data-playingprograms-elem=curprogram]").text();
    }

    console.log(title);

    if (!title) {
      return;
    }

    f.n = title;
    f.ch = "2003";
    f.rth = thumb;

    return f;
  }

  function letv(f, url) {
    console.log("letv");
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerText = "document.body.setAttribute('info', JSON.stringify(__INFO__));";
    document.head.appendChild(script);
    var info = JSON.parse(document.body.getAttribute('info'));
    var title = info.video.title;
    var thumb = info.video.poster;

    if (!title) {
      return;
    }

    f.n = title;
    f.ch = "2010";
    f.rth = thumb;

    return f;
  }

  function funtv(f, url) {
    console.log("funtv");
    if (/vplay[^.]*v-[^.]*/.test(url)) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.innerText = "document.body.setAttribute('vinfo', JSON.stringify(vinfo))";
      document.head.appendChild(script);
      var vinfo = JSON.parse(document.body.getAttribute('vinfo'));
      title = vinfo.title;
      thumb = vinfo.video_pic_200_110;
    } else if (/vplay[^.]*m-[^.]*/.test(url)) {  
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.innerText = "document.body.setAttribute('minfo', JSON.stringify(minfo))";
      document.head.appendChild(script);
      var minfo = JSON.parse(document.body.getAttribute('minfo'));
      title = minfo.info.name_cn;
      thumb = minfo.info.imagefilepath_m;
    }
    
    if (!title) {
      return;
    }

    f.n = title;
    f.ch = "2014";
    f.rth = thumb;

    return f;
  }

  function pptv(f, url) {
    console.log("pptv");
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerText = "document.body.setAttribute('title', webcfg.title)";
    document.head.appendChild(script);
    var title = document.body.getAttribute('title');
    if (title === undefined || title === null || title === "") {
      return;
    }

    f.n = title;
    f.ch = "2013";

    return f;
  }

  function sina(f, url) {
    console.log("sina");
    title = $("div.Vd_titBox.clearfix h2").attr("title");

    if (!title) {
      title = $("div.header div.left h1 a").attr("title");
    }

    if (!title) {
      title = $("h2#video_tit a").text();
    }

    if (!title) {
      title = $("div#J_Detail h2.hd a").text();
    } 

    if (!title) {
      title = $("h2#video_title a").text();
    } 

    if (!title) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.innerText = "document.body.setAttribute('title', videoConfig.VideoTitle)";
      document.head.appendChild(script);
      title = document.body.getAttribute('title');
    }

    console.log(title);

    if (!title) {
      return;
    }

    f.n = title;
    f.ch = "2006";

    return f;
  }

  function ku6() {
    console.log("ku6");
    title = $("meta[name=title]").attr("content");
    title = title.replace("视频", "");

    if (url.indexOf("/show/") < 0 || !title) {
      return;
    }

    f.n = title;
    f.ch = "2009";

    return f;
  } 

  function kankan(f, url) {
    console.log("kankan");
    title = $("div.header_title h1#movieTitle").text();
    console.log(title);
	
/* 	var id;
	var currentIndex;
	if (/video\.kankan\.com/.test(url)/) {
		
	}
	else if (/\/vod\/[\d]+\/[\d]+\.shtml/.test(url)) {
		id = $("");
		currentIndex = /rvod_(\d*)/.exec(id)[1];
	} else if (/\/v\/[\d]+\/[\d]+\.shtml/.test(url)) {
		id = $("li.on")[0].attr("id");
		currentIndex = /subli_(\d*)_pic/.exec(id)[1];
	}
 */
    if (!title) {
      return;
    }

    f.n = title;
    f.ch = "2012";

    return f;
  }

  function qq() {
    // var script = document.createElement('script');
    // script.type = 'text/javascript';
    // script.innerText = "document.body.setAttribute('title',VIDEO_INFO.title);"
      // + "document.body.setAttribute('coverTitle', COVER_INFO.title);"
      // + "document.body.setAttribute('thumb',COVER_INFO.pic)";
    // document.head.appendChild(script);
    
    // var coverTitle = document.body.getAttribute('coverTitle');
    // var title = document.body.getAttribute('title');

    // if (!coverTitle && !title) {
      // return;
    // }

    // var title = coverTitle + " " + title;
    // var id = document.body.getAttribute('id');
    // var thumb = document.body.getAttribute('thumb');
	
	title = $("h1.mod_player_title").text();
    
    f.n = title;
    f.ch = "2011";
    // f.rth = thumb;

    return f;
  }

  function gen(url) {
    f = {
      pu: document.referrer,
      bu: url,
      cat: 3,
      t: 1
    };

    console.log("gen");
    switch (true) {
    case /[^.]*youku.com\/v_show/.test(url.toLowerCase()):
      f = youku(f, url);
      break;
    case /[^.]*tudou.com/.test(url.toLowerCase()):
      f = tudou(f, url);
      break;
    case /[^.]*sohu.com/.test(url.toLowerCase()):
      f = souhu(f, url);
      break;
    case /[^.]*iqiyi.com/.test(url.toLowerCase()):
      f = iqiyi(f, url);
      break;
    case /[^.]*letv.com/.test(url.toLowerCase()):
      f = letv(f, url);
      break;
    case /[^.]*fun.tv/.test(url.toLowerCase()):
      f = funtv(f, url);
      break;
    case /[^.]*pptv.com/.test(url.toLowerCase()):
      f = pptv(f, url);
      break;
    case /[^.]*sina.com/.test(url.toLowerCase()):
      f = sina(f, url);
      break;
    case /[^.]*ku6.com/.test(url.toLowerCase()):
      f = ku6(f, url);
      break;
    case /[^.]*kankan.com/.test(url.toLowerCase()):
      f = kankan(f, url);
      break;
    case /[^.]*v.qq.com/.test(url.toLowerCase()):
      f = qq(f, url);
      break;
	case /[^.]*hunantv.com/.test(url.toLowerCase()):
      f = hunantv(f, url);
      break;
    }

    console.log(f);
    return f;
  }

  return {
    gen: gen
  };
})(jQuery);

chrome.runtime.onMessage.addListener(function(msg, sender, response) {
  console.log("onMessage in content script, " + msg.action);
  url = $(location).attr('href');
  if (msg.action === "getFeed") {
    f = feedGenerator.gen(url);
    response(f);
  }
});
