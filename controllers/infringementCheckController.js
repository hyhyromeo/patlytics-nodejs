import axios from "axios";

// Function to make a POST request with headers
export default async function infringementCheck(req, res) {
  // Replace with your OpenAI API key
  const token = process.env.API_KEY;
  const url = "https://api.openai.com/v1/chat/completions";
  // Get the data from the request
  const targetCompany = req.body.targetCompany;
  const targetPatents = req.body.targetPatents;
  // Make the POST request
  const data = {
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        // prompt to the model
        content: `company Name: ${
          targetCompany.name
        } companyProductData:${JSON.stringify(
          targetCompany.products
        )}  patentsData:${targetPatents}
              please help me to compare and return the top two infringing products of the company along with short and clear explanations of why these products potentially infringe the patent, specifically detailing which claims are at issue.
              i would like to have the response in two objects, where each object contains the infringing product details and the explanation. The analysis_date should be ${new Date().toLocaleString()} . At the last overall_risk_assessment should include the overall risk assessment summanary. 
              Example: {
                "analysis_id": "",
                "patent_id": "",
                "company_name": "",
                "analysis_date": "",
                "top_infringing_products": [
                  {
                    "product_name": "",
                    "infringement_likelihood": "High | Moderate | Low",
                    "relevant_claims": [],
                    "explanation": "",
                    "specific_features": ["", "", ""]
                  },
                  {
                    "product_name": "",
                    "infringement_likelihood": "",
                    "relevant_claims": [],
                    "explanation": "",
                    "specific_features": ["", "", ""],
                  }
                ],
                "overall_risk_assessment": ""
              }
              `,
      },
    ],
  };
  try {
    const response = await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return res.status(200).send(response.data.choices[0].message.content);
  } catch (error) {
    throw error;
  }
}
