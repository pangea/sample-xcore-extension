do $$
   (function() {
     "use strict";
     
     var sql = "SELECT schema_name FROM information_schema.schemata WHERE schema_name = 'smpl'",
         res = plv8.execute(sql);

     if(!res.length) {
       sql = "CREATE SCHEMA smpl;  GRANT ALL ON SCHEMA smpl TO GROUP xtrole;";
       plv8.execute(sql);
     }
   }());
$$ language plv8;
