class CreatePeriods < ActiveRecord::Migration[5.0]
  def change
    create_table :periods do |t|
      t.string :department_code
      t.string :section_name
      t.string :course_name
      t.string :course_number
      t.string :day
      t.string :start_time
      t.string :end_time
      t.string :course_type

      t.timestamps
    end
  end
end
