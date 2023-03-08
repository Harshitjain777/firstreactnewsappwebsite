import React from 'react'

const NewsItem=(props)=> {
 
  
    let {title , discription , Imageurl , newsurl , author , date , source }=props;
    return (
      <div className='my-3'>
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-dark" style={{left:"90%", zIndex:'1'}}>
    {source}
    
  </span>
  <img src={!Imageurl?"https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.yimg.com/os/creatr-uploaded-images/2023-02/a472e9b0-b46e-11ed-977a-c12905ce2e6a":Imageurl} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{discription}</p>
    <h6 className="card-text"><small className="text-muted">By-{!author?"Unknown" :author}  </small></h6>
    <h6 className="card-text"><small className="text-muted">Published at-{new Date(date).toGMTString()}  </small></h6>
    <a href={newsurl} target="_blank" rel='noreferrer' className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }

  export default NewsItem;