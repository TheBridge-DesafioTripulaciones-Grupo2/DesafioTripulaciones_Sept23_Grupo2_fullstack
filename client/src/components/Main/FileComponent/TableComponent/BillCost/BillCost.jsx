import React from "react";
import euro from "../../../../../assets/Euro.png";

const BillCost = () => {
  return (
    <article id="bill-total-cost">
      <div>
        <div>
          <div>
            <p className="price">123,45</p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6.80317 11.25C6.76813 11.495 6.75 11.7454 6.75 12C6.75 12.2546 6.76813 12.505 6.80317 12.75H10C10.4142 12.75 10.75 13.0858 10.75 13.5C10.75 13.9142 10.4142 14.25 10 14.25H7.25522C8.09782 16.0237 9.9057 17.25 12 17.25C12.9575 17.25 13.853 16.9944 14.6245 16.5481C14.983 16.3407 15.4418 16.4632 15.6492 16.8218C15.8566 17.1803 15.7341 17.6391 15.3755 17.8465C14.3819 18.4213 13.2282 18.75 12 18.75C9.06101 18.75 6.56072 16.8717 5.63409 14.25H5C4.58579 14.25 4.25 13.9142 4.25 13.5C4.25 13.0858 4.58579 12.75 5 12.75H5.2912C5.26397 12.5037 5.25 12.2535 5.25 12C5.25 11.7465 5.26397 11.4962 5.2912 11.25H5C4.58579 11.25 4.25 10.9142 4.25 10.5C4.25 10.0858 4.58579 9.75 5 9.75H5.63409C6.56072 7.12832 9.06101 5.25 12 5.25C13.2282 5.25 14.3819 5.57872 15.3755 6.15349C15.7341 6.3609 15.8566 6.81969 15.6492 7.17824C15.4418 7.53678 14.983 7.6593 14.6245 7.4519C13.853 7.00564 12.9575 6.75 12 6.75C9.9057 6.75 8.09782 7.97629 7.25522 9.75H10C10.4142 9.75 10.75 10.0858 10.75 10.5C10.75 10.9142 10.4142 11.25 10 11.25H6.80317Z"
                  fill="#FAFAFA"
                />
              </svg>
            </div>
          </div>
          <div>
            <p className="caption">Importe total de factura</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BillCost;