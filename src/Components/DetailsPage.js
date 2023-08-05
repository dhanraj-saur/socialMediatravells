const DetailsPage = ({ postData, moreData }) => {

    function userInfo(){
        console.log("adfasdf");
    }

    return (
        <div >
            <div className="postData">
                <h1 className="post-heads">Post Number #{postData?.id}</h1>
                <div className="img-btn">
                    <div className="card_1">
                        <img  src={` https://picsum.photos/200?random=${postData.id}`}   />
                          
                    </div>
                    <div className="buttons">
                        <div>
                            <button className="btns">Details</button>
                        </div>
                        <div>
                            <button className="btns" onClick={userInfo}>UserInfo</button>
                        </div>

                    </div>

                    <div className="post_body">
                        <p>{postData.body}</p>
                    </div>
                </div>
            </div>
            <h2 className="more-post">More Post</h2>
            <div className="details">
                {moreData.map((more,index) => {
                    console.log(more);
                    return (
                        <div className="card_1" key={index}>
                            <img src={` https://picsum.photos/200?random=${more.id}`} />
                        </div>
                    );
                })}
            </div>

        </div>
    );
};

export default DetailsPage;
