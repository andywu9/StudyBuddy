class CreateCourseSelections < ActiveRecord::Migration[5.0]


  def change
    create_table :course_selections do |t|
      t.string :department_code
      t.string :course_name
      t.string :section_name

      t.timestamps
    end
  end

end
