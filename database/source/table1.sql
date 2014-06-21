SELECT xt.create_table('table1', 'smpl');

SELECT xt.add_column('table1', 'table1_id'         , 'serial', 'primary key', 'smpl');
SELECT xt.add_column('table1', 'table1_name'       , 'text'  , ''           , 'smpl');
SELECT xt.add_column('table1', 'table1_description', 'text'  , ''           , 'smpl');

COMMENT ON TABLE smpl.table1 IS 'Simple Test Table 1';
