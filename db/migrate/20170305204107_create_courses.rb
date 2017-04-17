class CreateCourses < ActiveRecord::Migration[5.0]
  def change
    create_table :courses do |t|
      t.string :department_code
      t.string :course_name
      t.string :course_number
      t.string :section_name
      t.string :crn
      t.string :num_periods

      t.timestamps
    end
  end
end
