using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System.Data;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public ProductController(IConfiguration configuration) { 
        
                _configuration = configuration;

        
        }



        [HttpGet]
        public JsonResult get() {

            string query = @"
                        select * from Product

            ";


            DataTable table = new DataTable();
            string sqlDataSourse = _configuration.GetConnectionString("ProductAppCon");
            MySqlDataReader myRender;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSourse)) { 
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon)) { 
                    
                    myRender = myCommand.ExecuteReader();
                    table.Load(myRender);

                    myRender.Close();
                    mycon.Close();

               
      
                }
            
            
            }

            return new JsonResult(table);


        }



    }
}
