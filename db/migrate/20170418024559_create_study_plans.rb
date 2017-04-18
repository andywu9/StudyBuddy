class CreateStudyPlans < ActiveRecord::Migration[5.0]
  def change
    create_table :study_plans do |t|
      t.string :planName
      t.string :course
      t.integer :duration

      t.timestamps
    end
  end
end
